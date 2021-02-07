const express = require('express');
const app = express();
const session = require('express-session');
const productsRoute = require('./routes/products');
const viewsRoute = require('./routes/views');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'Oeee!!',
    resave: false,
    saveUninitialized: false,
}));
app.use(methodOverride());
app.use( express.json({extend : true}));
app.use(express.static('public'))
app.use('/api/products', productsRoute);
app.use('/api/views', viewsRoute);
app.listen(PORT, () => console.log(`Server on port: ${PORT}`));