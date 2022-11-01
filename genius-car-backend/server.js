const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello, from Backend!')
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    });
    