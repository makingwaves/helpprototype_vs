using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace helpprototype.Controllers.WebApi
{
    public class PdfController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public HttpResponseMessage CreatePdf(string html, string baseUrl)
        {
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}