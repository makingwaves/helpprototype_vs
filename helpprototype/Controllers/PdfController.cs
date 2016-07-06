using System.Web.Mvc;
using EvoPdf.HtmlToPdfClient;

namespace helpprototype.Controllers
{
    public class PdfController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public void Pdf(string path)
        {
            var converter = new HtmlToPdfConverter(ConfigSettings.PDFServer);
            var buffer = converter.ConvertUrl(path);
            Response.AddHeader("Content-Type", "application/pdf");

            Response.AddHeader(
                "Content-Disposition",
                string.Format("{0}; filename=test.pdf; size={1}",
                    "attachment",
                    buffer.Length));

            // Write the PDF document buffer to HTTP response
            Response.BinaryWrite(buffer);

            // End the HTTP response and stop the current page processing
            Response.End();
        }
    }
}