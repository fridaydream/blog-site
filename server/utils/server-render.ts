
import Koa from 'koa'
import ReactDomServer from 'react-dom/server'
import ejs from 'ejs'
import serialize from 'serialize-javascript'
import Helmet from 'react-helmet'
import { IStores, RouterContext } from '../types';

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const getStoreState = (stores: IStores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    // @ts-ignore
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

export default async (ctx: Koa.Context, next: () => void) => {
  const serverBundle = ctx.serverBundle;
  const template = ctx.template;
  const createStoreMap = serverBundle.createStoreMap
  const stores: IStores = createStoreMap()
  await sleep(1000)
  stores.themeStore.theme = 'dark'
  const createApp = serverBundle.default
  const routerContext: RouterContext = {}
  // @ts-ignore
  const app = createApp(stores, routerContext, ctx.url)
  const content = ReactDomServer.renderToString(app)
  if (routerContext.url) {
    ctx.redirect(routerContext.url);
    return;
  }
  const helmet = Helmet.rewind()
  const state = getStoreState(stores)
  console.log('state', state);
  const html = ejs.render(template, {
    appString: content,
    initialState: serialize(state),
    meta: helmet.meta.toString(),
    title: helmet.title.toString(),
    style: helmet.style.toString(),
    link: helmet.link.toString(),
    // materialCss: sheetsRegistry.toString()
  })
  ctx.body = html;
  await next();
}
