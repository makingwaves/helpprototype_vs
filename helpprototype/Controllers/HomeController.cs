using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace helpprototype.Controllers
{
    public class HomeController : Controller
    {
        //[Route("{*url}")]
        public ActionResult Index()
        {
            return View();
        }
    }
}