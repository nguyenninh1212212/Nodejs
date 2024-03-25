const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
var {engine} = require('express-handlebars');
const path = require('path');
const Login=require('./model/model')
//_________________________________
app.use(morgan('combined'))
//_________________________________
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));
//_________________________________
app.use(express.static(path.join(__dirname,'/public')));

//
app.get('/', (req, res) => {
  res.render('Login')
})
//_________________________________
app.get('/Signin', (req, res) => {
  res.render('Signin')
})

app.get('/home', async (req, res) => {
  try {
    const data = await Login.find({});
    res.render('home', { data });
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

//_________________________________
const db=require('./db/mg')
db.connect()
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})