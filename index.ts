const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const bodyparser = require('body-parser')
const { mulai } = require('./main')

//parse requests
app.use(bodyparser.urlencoded({ extended: true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

router.post('/get-url', function (req: any, res: any, next: any) {
  mulai(req.body.facebook)
  res.render('thanks', { error: true })
})

router.get('/', function (req: any, res: any, next: any) {
  res.render('index', { error: false })
})

app.use('/', router)
app.listen(3000)
