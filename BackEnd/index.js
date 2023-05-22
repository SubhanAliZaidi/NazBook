//Naziya = 'naziya'
const connectToMongo = require("./database");
const express = require("express");

connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

// Available Routes
app.get("/", (req, res) => {
	res.send("Hello Naziya!");
});

app.use('/api/v1/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes.js'));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
