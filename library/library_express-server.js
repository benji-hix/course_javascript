const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
