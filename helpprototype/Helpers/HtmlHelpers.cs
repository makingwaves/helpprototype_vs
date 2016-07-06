using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace helpprototype.Helpers
{
    public static class HtmlHelpers
    {
        public static ConditionalDiv BeginConditionalDiv(this HtmlHelper html,
    bool condition)
        {
            ConditionalDiv cd = new ConditionalDiv(html, condition);
            if (condition) { cd.WriteStart(); }
            return cd; // The disposing will conditionally call the WriteEnd()
        }
    }
}