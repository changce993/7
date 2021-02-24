const express = require('express');
const app = express();
const path = require('path');
const expshbs = require('express-handlebars');
const session = require('express-session');
const apiRoute = require('./routes/api');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'Oeee!!',
    resave: false,
    saveUninitialized: false,
}));

app.set('view engine', 'pug');

app.use(methodOverride());
app.use( express.json({extend : true}));
app.use(express.static('public'))
app.use('/api', apiRoute);

app.listen(PORT, () => console.log('Server on port:', PORT)).on('error', err => console.log('Error de conexion:',err));