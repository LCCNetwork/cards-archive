const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(process.cwd(), 'build'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static(path.join(process.cwd(), 'build')))

app.server = app.listen(3000, function () {
  const host = app.server.address().address
  const port = app.server.address().port
  console.info('Server listening at http://%s:%s', host, port)
})

app.get('/*', (req, res) => {
  res.render('app')
})

app.use((req, res) => {
  console.info('[404] ' + req.path)
  res.status(404)

  if (req.accepts('html')) res.render('error/404')
  else if (req.accepts('json')) res.end({error: 'Not found'})
  else res.type('txt').end('Not found')
})
