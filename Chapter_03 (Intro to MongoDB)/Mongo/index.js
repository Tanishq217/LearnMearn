const express = require("express");

const app = express();

const mongoose = require("mongoose");

app.use(express.json())

// putting the connextion string !! //

// Mongoose connected ! //

mongoose
  .connect(
    "mongodb+srv://tanishq2127:Rfkld1gkLJPEkFDA@cluster0.3uoptzi.mongodb.net/social?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.error("Cannot Connect", err);
  });

// Creating schema > Mongoose

let productScheme = new mongoose.Schema({
  // what can a product have ?

  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },

  inStock: {
    type: Boolean,
    required: true,
  },

  category: {
    type: String,
  },
});

// this is not the collection , so now we need to create the collectins in the database ! 

// create a model ! 

let productModel = mongoose.model('products' , productScheme)


// Add a default route
app.get('/', (req, res) => {
  res.send('Server on !');
});



// now we can USE AND APPLY The CURD operations ! 

// creaing the product ! 

// express >>> Post 
app.post('/api/products' ,async (req , res) => {
  const body = req.body 
  

  // We are passing this is Mongoose MOdel

  // productModel.create({
  //   product_name: body.product_name, 
  //   product_price: body.product_price , 
  //   inStock : body.inStock, 
  //   category: body.category
  // })

  // Now this needs to be pass inside DB DATABASE ! 

  await productModel.create({
    product_name: body.product_name, 
    product_price: body.product_price , 
    inStock : body.inStock, 
    category: body.category
  })


  res.status(201).json({message : "Product Created"})


})





app.listen(8002, () => {
  console.log("Server Running");
});
