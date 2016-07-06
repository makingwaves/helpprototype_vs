using System;

namespace DataAccess
{
    public interface IStorageAccess
    {
        string Customer(Guid id);
    }
}