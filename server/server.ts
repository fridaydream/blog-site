import Koa from 'koa'
import ReactSSR from 'react-dom/server'
import fs from 'fs'
import path from 'path'
// @ts-ignore
import koaStaticPlus from 'koa-static-plus'

const isDev = process.env.NODE_ENV === 'development'

const app = new Koa();

if (!isDev) {
  // 开发的时候用import需要放在最外面(这个文件可能没有)
  const serverEntry = require('../dist/server-entry').default
  app.use(koaStaticPlus(path.join(__dirname, '../dist'), {
    pathPrefix: '/public'  //路径前缀
  }))
  
  let template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use(async ctx => {
    const appString = ReactSSR.renderToString(serverEntry)
    template = template.replace('<!--app-->', appString)
    ctx.body = template;
  });
} else {
  const devStatic = require('./utils/dev-static').default
  devStatic(app)
}

app.listen(3333, () => {
  console.log('server is listening in 3333')
})