
import Koa from 'koa'
import ReactDomServer from 'react-dom/server'

interface RouterContext {
  url?: string;
}

interface Bundle {
  default: (routerContext: object, url: string) => any
}

export default (bundle: Bundle, template: string, ctx: Koa.Context) => {
  const createApp = bundle.default
  const routerContext: RouterContext = {}
  // @ts-ignore
  const app = createApp(routerContext, ctx.url)
  const appString = ReactDomServer.renderToString(app)
  console.log('appString', appString);
  console.log('routerContext.url', routerContext);
  if (routerContext.url) {
    ctx.redirect(routerContext.url);
    return;
  }
  template = template.replace('<app></app>', appString)
  ctx.body = template;
}
