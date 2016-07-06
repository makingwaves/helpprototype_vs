using System;
using System.Web.Mvc;
using DataAccess;
using Newtonsoft.Json;

namespace helpprototype.Controllers
{
    public class CustomerController : Controller
    {
        private readonly CustomerAccessPoint _customerAccessPoint;

        public CustomerController()
        {
            //TODO: Legge inn IoC for resolving av lagringstype eller web.config resolving
            _customerAccessPoint = new CustomerAccessPoint(new AzureStorage());

        }
        public string DataString()
        {
            var data = JsonData();
            var serializeObject = JsonConvert.SerializeObject(data);
            return serializeObject;
        }

        public JsonResult DataJson()
        {
            var data = JsonData();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
            

        public ActionResult Index()
        {
            return View();
        }

        private object JsonData()
        {
            var customer = _customerAccessPoint.Customer(Guid.Empty);
            return customer;
        }
    }
}