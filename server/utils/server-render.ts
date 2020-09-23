
import Koa from 'koa'
import ReactDomServer from 'react-dom/server'
import ejs from 'ejs'
import serialize from 'serialize-javascript'
import Helmet from 'react-helmet'
import { IStores } from '../../client/store/types';

interface RouterContext {
  url?: string;
}

interface Bundle {
  default: (routerContext: object, url: string) => any
  createStoreMap: () => IStores;
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const getStoreState = (stores: { [x: string]: { toJson: () => any } }) => {
  return Object.keys(stores).reduce((result, storeName) => {
    // @ts-ignore
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

export default async (bundle: Bundle, template: string, ctx: Koa.Context, next: () => any) => {
  const createStoreMap = bundle.createStoreMap
  const stores: IStores = createStoreMap()
  await sleep(1000)
  stores.themeStore.theme = 'dark'
  const createApp = bundle.default
  const routerContext: RouterContext = {}
  // @ts-ignore
  const app = createApp(stores, routerContext, ctx.url)
  const content = ReactDomServer.renderToString(app)
  if (routerContext.url) {
    ctx.redirect(routerContext.url);
    return;
  }
  const helmet = Helmet.rewind()
  // @ts-ignore
  const state = getStoreState(stores)
  const html = ejs.render(template, {
    appString: content,
    initialState: serialize(state),
    meta: helmet.meta.toString(),
    title: helmet.title.toString(),
    style: helmet.style.toString(),
    link: helmet.link.toString(),
    // materialCss: sheetsRegistry.toString()
  })
  return html;
}
