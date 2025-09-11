// Always inetilise the packages and directry ! Package JSON 

const http = require('http')


// Creating a server ! 

// const mySerevr = http.createServer((req, res) => { // Put the server in Variable ! 
//   console.log(req) // will recieve the complete object > all detail come from the client side will appear here ! 
//   console.log("Request Made")
//   res.end("New Response , Thanks for Visiting my server !") // res.end > to get the result or res 

// })    // server take request and give  response ! 

// // we meed to assign an address >> PORT  

// mySerevr.listen(8000,  () => {
//   console.log('Server Started !') // > Node index.js ! 
// })



// USING >>> NODEMON >> TO KEEP THE SERVER RUNNING !  



// What is this request Object ! 

 

// for what req , what res we need to send ! 

// > if i am requesting a page for laptop > we should recieve the laptop page ! 


// USE > req paramenter ! 

 
const fs = require('fs')

const myServer = http.createServer((req, res) => {
  let log  = `${Date.now()} : ${req.url} new req recieved ! \n` 

  fs.appendFile('log.txt' , log , (err , data) =>  {
    console.log('Log Updated !')
  })


  // differrent result for different requests ! 

  switch(req.url){
    case '/' :  
    res.end('Home Page Data')
    break ; 
    case '/about' :  
    res.end('Home about Data')
    break ; 
    case '/contact' :  
    res.end('Home contact Data')
    break ; 
  }


  // 1757510345667 : /favicon.ico new req recieved !  This is Unusuall ! what is this favicon ? 
  // Its the LOGO of Page 

  console.log(req.url)

}) ; 

myServer.listen(8000 , ()=>{
  console.log("Server Started !")
})