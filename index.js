const express = require('express');
const sequelize = require('./config/database');
const Routes = require('./routes/productRoutes');


const app = express();

sequelize.sync().then(() => console.log("database is connected successfully"));

app.use(express.json());

app.use('/products', Routes)

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Port ${port} is Running`)
})