const express = require('express');
const app = express();
const session = require('express-session');
const productsRoute = require('./routes/products');
const viewsRoute = require('./routes/views');
const PORT = process.env.PORT || 4000;

app.use(session({
    secret: 'Oeee!!',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))
app.use( express.json({extend : true}));
app.use('/', productsRoute);
app.use('/visitas', viewsRoute);
app.listen(PORT, () => console.log(`Server in port: ${PORT}`)); 