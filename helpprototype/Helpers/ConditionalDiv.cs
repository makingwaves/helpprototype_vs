using System;
using System.Web.Mvc;

namespace helpprototype.Helpers
{
    public class ConditionalDiv : IDisposable
    {
        private HtmlHelper Html;
        private bool _disposed;
        private TagBuilder Div;
        private bool Condition;

        public ConditionalDiv(HtmlHelper html, bool condition)
        {
            Html = html;
            Condition = condition;
            Div = new TagBuilder("div");
        }

        public void Dispose()
        {
            Dispose(true /* disposing */);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                _disposed = true;
                if (Condition) { WriteEnd(); }
            }
        }

        public void WriteStart()
        {
            Html.ViewContext.Writer.Write(Div.ToString(TagRenderMode.StartTag));
        }

        private void WriteEnd()
        {
            Html.ViewContext.Writer.Write(Div.ToString(TagRenderMode.EndTag));
        }
    }
}