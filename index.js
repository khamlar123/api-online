const express = require('express');
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const router = require('./router/index');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);
app.get('/', async (req, res) => {
    return res.status(200).json('halow ')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})