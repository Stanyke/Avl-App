const client = require('./connectDB');

const runResturantTable = client.query("CREATE TABLE IF NOT EXISTS resturants ( resturant_id SERIAL PRIMARY KEY, resturant_name TEXT NOT NULL, sunday VARCHAR (150) NOT NULL, monday VARCHAR (150) NOT NULL, tuesday VARCHAR (150) NOT NULL, wednesday VARCHAR (150) NOT NULL, thursday VARCHAR (150) NOT NULL, friday VARCHAR (150) NOT NULL, saturday VARCHAR (150) NOT NULL, type_of_food VARCHAR (150) NOT NULL, michelin_star VARCHAR (20) NOT NULL, parking VARCHAR (10) NOT NULL, delivery VARCHAR (10) NOT NULL, pay_deposit VARCHAR (10) NOT NULL, evaluation VARCHAR (10) NOT NULL, geographical_location TEXT NOT NULL)", (err, res) =>
{
    console.log(err, res);
});

module.exports = runResturantTable;