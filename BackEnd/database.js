//Naziya = 'naziya'
const express = require("express");
const mongoose = require("mongoose");

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1', {
        useNewUrlParser:true,useUnifiedTopology:true
    }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('successfully connected')
        }
    })
}

module.exports = connectToMongo;