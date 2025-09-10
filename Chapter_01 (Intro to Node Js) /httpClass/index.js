// Always inetilise the packages and directry ! Package JSON 

const http = require('http')


// Creating a server ! 

const mySerevr = http.createServer((req, res) => { // Put the server in Variable ! 
  console.log("Request Made")
  res.end("New Response , Thanks for Visiting my server !") // res.end > to get the result or res 

})    // server take request and give  response ! 

// we meed to assign an address >> PORT  

mySerevr.listen(8000,  () => {
  console.log('Server Started !') // > Node index.js ! 
})



// USING >>> NODEMON >> TO KEEP THE SERVER RUNNING !  