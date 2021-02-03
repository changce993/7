const express = require('express');
const app = express();
const session = require('express-session');
const productsRoute = require('./routes/products');
const viewsRoute = require('./routes/views');
const PORT = process.env.PORT || 8080;

app.use(session({
    secret: 'Oeee!!',
    resave: false,
    saveUninitialized: false,
}));
app.use( express.json({extend : true}));
app.use('/', productsRoute);
app.use('/views', viewsRoute);
app.listen(PORT, () => console.log(`Server on port: ${PORT}`));