

namespace DataAccess
{
    public class CustomerAccessPoint
    {
        public CustomerAccessPoint()
        {
            Storage = new AzureLocalStorage();
        }

        public IStorageAccess Storage { get; set; }

        public string Customer(System.Guid id)
        {
            return Storage.Customer(id);
        }
    }
}