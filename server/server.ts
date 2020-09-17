import Koa from 'koa'
import fs from 'fs'
import path from 'path'
// @ts-ignore
import koaStaticPlus from 'koa-static-plus'
// import favicon from 'koa-favicon'

import serverRender from './utils/server-render'

const isDev = process.env.NODE_ENV === 'development'

const app = new Koa();

// app.use(favicon('http://www.baidu.com/favicon.ico'));

if (!isDev) {

  // 开发的时候用import需要放在最外面(这个文件可能没有)
  const serverEntry = require('../dist/server-entry')
  let template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use(async (ctx, next) => {
    // @ts-ignore
    serverRender(serverEntry, template, ctx)
    await next()
  });
  app.use(koaStaticPlus(path.join(__dirname, '../dist'), {
    pathPrefix: '/public/'  //路径前缀
  }))

} else {
  const devStatic = require('./utils/dev-static').default
  devStatic(app)
}

app.listen(3333, () => {
  console.log('server is listening in 3333')
})
