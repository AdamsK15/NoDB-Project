const express = require('express');

const app = express();

const port = 5555;

// const sauces = require('../sauces.json')
const sc = require('./controllers/sauce-control')

app.use(express.json())

app.get('/api/SampleSauce', sc.getSauces)
app.post('/api/SampleSauce', sc.addSauce)
app.put('/api/SampleSauce/:id', sc.editSauce)
app.delete('/api/SampleSauce/:id', sc.deleteSauce)

app.listen(port, () => console.log(`Server listening from port ` + port))