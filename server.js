const app = require('./app');

const client = require('./db/connectDB');

const resturantRoute = require('./routes/resturant');

const port = process.env.PORT || 3000;

app.listen(port, () =>
{
    console.log(`Server Running On port ${port}`);
});