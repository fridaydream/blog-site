import axios from 'axios'
import webpack from 'webpack'
import MemoryFs from 'memory-fs'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import path from 'path'
import Koa from 'koa'
import koa2proxymiddleware from 'koa2-proxy-middleware'
import bodyparser from 'koa-bodyparser'
// @ts-ignore
import koaStaticPlus from 'koa-static-plus'
import serverConfig from '../../build/webpack.config.server'

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html')
    .then(res => {
      resolve(res.data)
    })
    .catch(reject)
  })
}

const Module = module.constructor
const mfs = new MemoryFs;
// @ts-ignore
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs
// @ts-ignore
let serverBundle;
// @ts-ignore
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach((errmsg: string) => console.error(errmsg));
  stats.warnings.forEach((warn: string) => console.warn(warn));
  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )
  const bundle = mfs.readFileSync(bundlePath, 'utf-8')
  // @ts-ignore
  const m = new Module()
  m._compile(bundle, 'server-entry.tsx')
  serverBundle = m.exports.default
})

// @ts-ignore
export default function (app) {
  const options = {
    targets: {
      // (.*) means anything
      '/public/(.*)': {
          target: 'http://localhost:8888/',
          changeOrigin: true,
      },
    }
  }
  // @ts-ignore
  app.use(koa2proxymiddleware(options));
  app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }))
  app.use(async (ctx: Koa.Context) => {
    // @ts-ignore
    const appString = ReactDomServer.renderToString(serverBundle)
    let template  = await getTemplate()
    console.log('template', template);
    template = (template as string).replace('<!--app-->', appString)
    ctx.body = template;
  });
}
