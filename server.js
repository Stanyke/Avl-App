const app = require('./app');

const client = require('./db/connectDB');

const justRoute = require('./routes/just');

const port = process.env.PORT || 3000;

app.listen(port, () =>
{
    console.log(`Server Running On port ${port}`);
});