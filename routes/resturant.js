const app = require('../app');

const client = require('../db/connectDB');


//Routes Middlewares
app.get('/', (req, res) =>
{
	const userCurrentDate = new Date();
	const userCurrentDay = userCurrentDate.getDay();

	if (userCurrentDay === 0)
	{
		client.query(`SELECT * FROM resturants WHERE sunday != 'Closed'`, (derr, myres) => 
		{
			if (derr)
			{
				res.status(500).send("We Encoutered An Error Getting Resturants");
			}

			if (myres.rows)
			{
				res.status(200).json({"resturants_open_today": myres.rows});
			}
		});
	}
	
	else if (userCurrentDay === 1)
	{
		client.query(`SELECT * FROM resturants WHERE monday != 'Closed'`, (derr, myres) => 
		{
			if (derr)
			{
				res.status(500).send("We Encoutered An Error Getting Resturants");
			}

			if (myres.rows)
			{
				res.status(200).json({"resturants_open_today": myres.rows});
			}
		});
	}
	
	else if (userCurrentDay === 2)
	{
		client.query(`SELECT * FROM resturants WHERE tuesday != 'Closed'`, (derr, myres) => 
		{
			if (derr)
			{
				res.status(500).send("We Encoutered An Error Getting Resturants");
			}

			if (myres.rows)
			{
				res.status(200).json({"resturants_open_today": myres.rows});
			}
		});
	}
	
	else if (userCurrentDay === 3)
	{
		client.query(`SELECT * FROM resturants WHERE wednesday != 'Closed'`, (derr, myres) => 
		{
			if (derr)
			{
				res.status(500).send("We Encoutered An Error Getting Resturants");
			}

			if (myres.rows)
			{
				res.status(200).json({"resturants_open_today": myres.rows});
			}
		});
	}
	
	else if (userCurrentDay === 4)
	{
		client.query(`SELECT * FROM resturants WHERE thursday != 'Closed'`, (derr, myres) => 
		{
			if (derr)
			{
				res.status(500).send("We Encoutered An Error Getting Resturants");
			}

			if (myres.rows)
			{
				res.status(200).json({"resturants_open_today": myres.rows});
			}
		});
	}
	
	else if (userCurrentDay === 5)
	{
		client.query(`SELECT * FROM resturants WHERE friday != 'Closed'`, (derr, myres) => 
		{
			if (derr)
			{
				res.status(500).send("We Encoutered An Error Getting Resturants");
			}

			if (myres.rows)
			{
				res.status(200).json({"resturants_open_today": myres.rows});
			}
		});
	}
	
	else if (userCurrentDay === 6)
	{
		client.query(`SELECT * FROM resturants WHERE saturday != 'Closed'`, (derr, myres) => 
		{
			if (derr)
			{
				res.status(500).send("We Encoutered An Error Getting Resturants");
			}

			if (myres.rows)
			{
				res.status(200).json({"resturants_open_today": myres.rows});
			}
		});
	}
});

const resturantRoute = app;

module.exports = resturantRoute;