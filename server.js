const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi my name is Rosalie!')
})

app.get('/lunch', (req, res) => {
    const options = [
    {
        food: 'sandwiches'
    },
    {
        food: 'soup'
    },
    {
        food: 'salad'
    },
    {
        food: 'sushi'
    }]
    
    res.json(options)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})