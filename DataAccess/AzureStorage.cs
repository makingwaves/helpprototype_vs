using System;
using Models;
using Newtonsoft.Json;

namespace DataAccess
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class AzureStorage : IStorage
    {
        public string Customer(Guid id)
        {
            var customer = new Customer() { Navn = "Ole Brumm", Personnummer = 01101048796 };
            return JsonConvert.SerializeObject(customer);
        }
    }
}
