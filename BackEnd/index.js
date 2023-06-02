//Naziya = 'naziya'
const connectToMongo = require("./database");
const express = require("express");
const cors = require('cors');

connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.get("/", (req, res) => {
	res.send("Hello Naziya!");
});

app.use('/api/v1/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes.js'));

app.listen(port, () => {
	console.log(`NazBook listening at http://localhost:${port}`);
});
