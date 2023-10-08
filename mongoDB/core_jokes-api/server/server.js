const express = require("express");
const app = express();

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// load env variables
require('dotenv').config();
const port = process.env.PORT;

require('./config/mongoose.config')

const allRoutes = require('./routes/joke.routes');
allRoutes(app);

app.listen(port, () => console.log(` 🐀🐀 Listening on port: ${port} 🐀🐀`))