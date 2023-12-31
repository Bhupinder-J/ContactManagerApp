const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectdb = require('./configs/dbConnection');
const dotenv = require('dotenv').config();

connectdb();
const app = express();

const port = process.env.PORT || 5000;

/** MIDDLE WARE*/

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
})