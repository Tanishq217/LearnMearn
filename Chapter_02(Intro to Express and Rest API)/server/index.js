const express = require('express') 


const app = express() 

// We can use aap.get .post .put and everything 


// Lets create our first Server with Express !!!! // 

// Every route can be created Independently ! 

app.get('/' , (req , res) => {
  res.send("Hello from Home Page")
})

app.get('/about' , (req , res) => {
  res.send("Hello from About Page")
})

app.get('/contact' , (req , res) => {
  res.send("Hello from Contact Page")
})

app.listen(8001, () => {
  console.log('Server Running!')
})



// This is more clean and Easy with Express!
  