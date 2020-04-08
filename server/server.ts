import Koa from 'koa'
import ReactSSR from 'react-dom/server'
import serverEntry from '../dist/server-entry'
const app = new Koa();
app.use(async ctx => {
  const appString = ReactSSR.renderToString(serverEntry)
  ctx.body = appString;
});
app.listen(3333, () => {
  console.log('server is listening in 3333')
})