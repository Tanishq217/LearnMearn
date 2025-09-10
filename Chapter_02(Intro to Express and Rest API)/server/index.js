const express = require('express') 


const app = express() 

// We can use aap.get .post .put and everything 


// Lets create our first Server with Express !!!! // 

// Every route can be created Independently ! 

// app.get('/' , (req , res) => {
//   res.send("Hello from Home Page")
// })

// app.get('/about' , (req , res) => {
//   res.send("Hello from About Page")
// })

// app.get('/contact' , (req , res) => {
//   res.send("Hello from Contact Page")
// })



// This is more clean and Easy with Express!
  

// What is this Object ? 

// One perticular route can make Requests to multiple Resources ! 

// Url keep changing ! Adding more and more as we click more ! 

// Lets make it ! >> Routes Parameters ! 

// how to set them up ? 

// take helo of Properties ! 





// Making a Dummy List //

let courses = [
  {id: 1 , name : "Jave"} , 
  {id: 2 , name : 
    "Dev"
  },
  {id : 3, name :
    "DBMS"
  }
]






// Made a courses rout 

// Get all courses ! 
app.get('/courses' , (req , res) => {
  res.send(courses)
})



// this will show all the courses ! 
// getting this is JSON !

// lets make changes with more links ! 

// setting up route Parameters ! 






// get courses with id 
app.get('/courses:id' , (req , res) => {


  // console.log(req.params) // THIS WILL GET OBJECT IN STRING ! 


   // this is special object ! 
  // this route will store in req.params ! 

  // Id -> Key 
  // Value -> Value 

  // Specific Id > Specif Course 

  
  let course = courses.find((course) => course.id === parseInt(req.params.id));  // find method gives us the first match ! 



})


app.listen(8001, () => {
  console.log('Server Running!')
})
