//inicializar express and morgan
const morgan = require('morgan');
const express = require('express'); 
const path = require('path');
const exphbs = require('express-handlebars');
const app  =  express();

//settings
app.set('port', process.env.PORT  || 4000); //if system had a port use it, if not use port 4000
app.set('views', path.join(__dirname,'views')); //especifica donde está la carpeta views
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  }));
  
app.set('view engine ','.hbs');

//middlewares (only when server sends a petition )
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false }));//only strings values
app.use(express.json());//configuration for json values

//Global variables
app.use((req, res, next ) =>{
    next();
})
//routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

//public
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(app.get('port'), () =>{
    console.log('server on PORT', app.get('port'));
})
