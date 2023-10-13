const express = require('express');
const cors = require('cors')
const app = express();

require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config')

app.use(cors(), express.json(), express.urlencoded({ extended: true}));

//* routes below
const productRoutes = require('./routes/product.routes')
productRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
