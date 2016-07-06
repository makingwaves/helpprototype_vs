using System;

namespace DataAccess
{
    public interface IStorage
    {
        string Customer(Guid id);
    }
}