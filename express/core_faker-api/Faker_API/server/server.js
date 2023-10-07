const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const routes = require('./routes/routes');
routes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );
