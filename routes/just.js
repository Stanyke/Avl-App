const app = require('../app');

app.get('/', (req, res) =>
{
    res.send('Welcome route');
});

const justRoute = app;

module.exports = justRoute;