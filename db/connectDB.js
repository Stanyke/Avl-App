const { Client } = require('pg');

const client = new Client({
    "user": "yuqkcdaf",
    "password": "OIuXNHk1U3aezWeC6gOLR31RXlRP6a_5",
    "host": "rajje.db.elephantsql.com",
    "port": 5432,
    "database": "yuqkcdaf"
});

client.connect().then(() =>
{
    console.log("Server, You Have Successfully connected to PostgreSql");
})
.catch((error) =>
{
    console.log("Server, Unable to connect to PostgreSql");
	console.error(error);
});

module.exports = client;