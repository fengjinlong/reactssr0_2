import express from 'express'
// const express = require('express')
import App from '../shared/App'
import React from 'react'

import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'



const app = express()

const routersArr = ['/', '/about', '/other']
app.get(routersArr, function (req, res) {
  const content = renderToString(
    <StaticRouter location= {req.url}>
          <App />
        </StaticRouter>
  )
  res.end(`
    <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <div id="root">${content}</div>
          <script src="/aa/bundle.js"></script>
        </body>
      </html>
    `)
})
app.get('api', (req, res) => {
  res.json({
    success: true,
    data: 666
  })
})
app.listen(3000, () => {
  console.log('fuwu')
})