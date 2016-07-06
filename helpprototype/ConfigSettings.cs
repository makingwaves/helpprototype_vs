using System.Collections.Specialized;
using System.Web.Configuration;

namespace helpprototype
{
    public static class ConfigSettings
    {
        private static readonly NameValueCollection Appsettings = WebConfigurationManager.AppSettings;
         
        public static string PDFServer => Appsettings["PDFServer"];
    }
}