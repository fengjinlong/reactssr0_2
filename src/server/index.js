import express from 'express'
// const express = require('express')
import App from '../shared/App'
import React from 'react'

import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import { createServerStore } from "../shared/store/index";
import { matchRoutes } from "react-router-config";
import {Provider} from 'react-redux'
import routes from "../shared/Routes";



const app = express()
app.use(express.static('public'))
console.log(1111111)
const routersArr = ['/', '/about', '/other']
app.get(routersArr, function (req, res) {


  console.log(555555)
  const matchedRouters = matchRoutes(routes, req.path)
  const store = createServerStore()
  const promises = []
  matchedRouters.forEach(item => {
    console.log(66666)
    console.log(item.route)
    if (item.route.loadData) {
      console.log(77777)
      promises.push(
        new Promise(resolve => {
          item.route.loadData(store).then(resolve)
        })
      )
    }
  })
  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location= {req.url}>
          <App />
        </StaticRouter>
      </Provider>
    )
    res.end(`
      <!DOCTYPE html>
        <html>
          <head></head>
          <body>
            <div id="root">${content}</div>
            <script>
                  window.REDUX_DATA = ${JSON.stringify(store.getState())}
                </script>
            <script src="/bundle.js"></script>
          </body>
        </html>
      `)
  })

  
  
})
app.get('/api', (req, res) => {
  res.json({
    success: true,
    data: 666
  })
})
app.listen(3000, () => {
  console.log('启动')
})