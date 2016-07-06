

namespace DataAccess
{
    public class CustomerAccessPoint
    {
        public CustomerAccessPoint(IStorage storage)
        {
            Storage = storage;
        }

        private IStorage Storage { get; }

        public string Customer(System.Guid id)
        {
            return Storage.Customer(id);
        }
    }
}