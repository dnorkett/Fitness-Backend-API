//Load dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


//Generate app and configure port
const app = express();
const port = process.env.PORT || 5000;


//Middlewear
app.use(cors());
app.use(express.json());


//Database connection
const uri = process.env.ATLAS_URI;
console.log(`DB connection string: ${uri}`);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})


//Routers
const exercisesRouter = require('./routes/exercises');
const usersRouter  = require('./routes/users');
const caloriesRouter = require('./routes/calories');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/calories', caloriesRouter);


//Start server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});