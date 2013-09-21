
var express = require('express')
  , http = require('http')
  , path = require('path')

var app = express()
app.use(express.favicon())
app.use(express.static(path.join(__dirname, 'public')))

http.createServer(app).listen( process.env.PORT || 10080 )
