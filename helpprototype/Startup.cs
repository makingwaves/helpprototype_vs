using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(helpprototype.Startup))]
namespace helpprototype
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
