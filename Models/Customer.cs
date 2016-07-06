using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    [Serializable]
    public class Customer
    {
        public string Navn { get; set; }
        public int Personnummer { get; set; }
        public string Json { get; set; }
    }
}
