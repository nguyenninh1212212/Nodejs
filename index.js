const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
var {engine} = require('express-handlebars');
const path = require('path');
const Login=require('./model/model')
////
app.use(morgan('combined'))
////
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));
//
app.use(express.static(path.join(__dirname,'/public')));

//
app.get('/', (req, res) => {
  res.render('Login')
})
app.get('/Signin', (req, res) => {
  res.render('Signin')
})
app.get('/home', async (req, res) => {
  try{
  const data=(await Login.find({})).map(m=>m.toObject())
  return res.render('home',{data})
  }
  catch (error) {
    console.error(error);
  }
})
////
const db=require('./db/mg')
db.connect()
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})