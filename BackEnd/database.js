//Naziya = 'naziya'
const mongoose = require("mongoose");

const mongoURL = 'mongodb://127.0.0.1:27017/Naz?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1';

const connectToMongo = () => {
	mongoose.set("strictQuery", true);
	mongoose.connect(
		mongoURL, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log("successfully connected");
			}
		}
	);
};

module.exports = connectToMongo;
