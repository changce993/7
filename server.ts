const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const session = require('express-session');
const apiRoute = require('./routes/api');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 8080;
const socketIO = require('./socket');

socketIO(http);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({ secret: 'Oee!', resave: false, saveUninitialized: false }));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());
app.use( express.json({extend : true}));
app.use(express.static('public'))
app.use('/api', apiRoute);
app.use('/chat', (req: any, res: any) => res.render('chat'));
app.use('/', (req: any, res: any) => res.render('index'));
app.use((req: any, res: any) => res.status(404).render('404'));

http.listen(PORT, () => console.log('Server on port:', PORT)).on('error', (err: any) => console.log('Error de conexion:',err));