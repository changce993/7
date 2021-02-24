const express = require('express');
const app = express();
const path = require('path');
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

app.set('view engine', 'ejs');

app.use(methodOverride());
app.use( express.json({extend : true}));
app.use(express.static('public'))
app.use('/api', apiRoute);
app.use('/', (req,res) => res.render('index'));
app.use((req,res) => res.status(404).render('404'));

app.listen(PORT, () => console.log('Server on port:', PORT)).on('error', err => console.log('Error de conexion:',err));