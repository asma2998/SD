const express = require('express');
require('./config/connect');
const cors = require('cors');

const dashRoute = require('./routes/dashboard');


const app = express();
app.use(express.json());
app.use(cors());

app.use('/dashboard', dashRoute);


app.listen(3001, () => {
    console.log('server work !');
})