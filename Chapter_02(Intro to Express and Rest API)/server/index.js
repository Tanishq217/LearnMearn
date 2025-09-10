const express = require('express') 


const app = express() 
app.use(express.json())

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

  
  // let course = courses.find((course) => course.id === parseInt(req.params.id));  // find method gives us the first match ! 
  // res.send(course)
})



// OTHERS METHODS // 

// CREATING DATA ! 
// Make a new Course ! 

// new method > Create a course > 
// Post !!!!!!!!! 


// in post method we canot handle using browser >>>> we need a testing Tools !!! 



//*****// POSTMAN //*****//


// http > we can select any api we want 


app.post('/courses' , (req, res) => {
  // // to create we need to push ! 

  // // create object > push 

  // let course = {
  //   id : 4 , 
  //   name : 'NodeJs'
  // }

  // // push in main Courses ! 

  // courses.push(course)
  // res.send(courses)

  // THIS ALL NEED TO BE DONE IN CLIENT SIDE MAYBE IN FORM OR SONETHING !

  let course = {
    id : req.body.id , 
    name : req.body.name , 
  }

  // JSON DATA SHOULD BE PASSED AS JS OBJECT 
  // !! middleware !! // 

  // BuiltIn Middleware 

  // Form Data => URL encoded 
  // html , json => Static 

  // for json 

  // Express.json // >> parse json to js object 

  // app.use(express.json())



  // update a resourse 
  // to identify the resourse ! 

  app.put('/courses/:id' , (req,res) => {
    let course = course.find((course) => course.id === parseInt(req.parse.id)) // course found ! 

    // change the name ! 

    course.name = req.body.name 

    res.send(courses)

  })


  // detete a resourse 




  // At end to save data > use a database ! 

})
 


app.listen(8001, () => {
  console.log('Server Running!')
})
