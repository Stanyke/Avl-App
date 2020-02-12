const app = require('../app');

const client = require('../db/connectDB');


//Routes Middlewares
app.get('/', (req, res) =>
{
	client.query(`SELECT * FROM resturants`, (derr, myres) => 
	{
		if (derr)
		{
			res.status(500).send("We Encoutered An Error Getting Resturants");
		}

		if (myres.rows)
        {
			res.status(200).json({"resturants": myres.rows});
		}
	});
});

const resturantRoute = app;

module.exports = resturantRoute;