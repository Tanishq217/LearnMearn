// CURD > READ > CREATE > UPDATE > DETETE 

// require it ? Import it 

const fs = require('fs') // > FS MODULE IMPORTED ! 



// Start 
console.log("Start")

// Read a file ! (SYNC)

let data = fs.readFileSync('f1.txt') 
// console.log(data)// we get a buffer > This is System generated encoding ! 
console.log("Data from file 1 is  > " + data)


// READING FILE ASYNC 

fs.readFile('f2.txt' , (err , data) => { // THis pattern is called >>>> Error first >>>> Called >> Error First callback !! 
  if(err){
    console.error(err)
  }
  console.log("Data from file 2 is > " + data) 
}) // THIS TAKES A CALLBACK ! 


console.log("Start") 


// Start > File 1 > END > File 2 



// Writing in a File 

fs.writeFile('f3.txt' , "I am New Written Thing", function (err , data) {

}) ; 
console.log("File Created !") 