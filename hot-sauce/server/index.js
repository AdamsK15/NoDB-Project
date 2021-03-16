const express = require('express');

const app = express();

const port = 5555;

const sauces = require('../sauces.json')
const sc = require('./controllers/sauce-control')

app.use(express.json())

app.get('/api/sauces', sc.read)
app.post('/api/sauces', sc.create)
app.put('/api/sauces/:id', sc.update)
app.delete('/api/sauces/:id', sc.delete)

app.listen(port, () => console.log(`tonight we done in ` + port))