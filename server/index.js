require('dotenv').config();
const express = require('express');
const app = express();
const todoRouter = require('./routes/todoRouter');
const cors = require('cors');

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', todoRouter);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (err) {
        console.error(err);
    }
}

start();