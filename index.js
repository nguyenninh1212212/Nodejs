const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
var {engine} = require('express-handlebars');
const path = require('path');
const route=require('./Routes/index')
const methodOverride=require("method-override")
const DataUser=require('./model/model')
////
app.use(morgan('combined'))
//________________________________________________________
app.use(express.static(path.join(__dirname,'public')))
//________________________________________________________
app.use(methodOverride('_method'))
//________________________________________________________
//Xu ly du lieu dc gui tu form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//________________________________________________________
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));
//________________________________________________________
app.use(express.static(path.join(__dirname,'/public')));
//________________________________________________________
//

route(app)


//_________________________________________________________
  
//________________________________________________________

//________________________________________________________
const db=require('./db/mg')
db.connect()
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})