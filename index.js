const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/random/" , (req , res) => {
  let random = Math.random();
  res.json({number: random});
})

app.get("/random/:max" , (req , res) => {
  let isLucky = req.query.lucky;
  if  (isLucky !=0 || isLucky !=1){
    res.status(400).send("status needs to be 0 or 1")
  } 
  let random = Math.ceil(Math.random() * req.params.max);
  if (isLucky){
    let LuckyRandom = Math.ceil(Math.random() * req.params.max);
    random = Math.max(random, luckyRandom);
  }
  res.json({number: random});
})