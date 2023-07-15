const express = require('express')
const app = express()

// app.use('/',(req, res, next)=>{
//     res.send('<h1>Hello From Home!</h1>')
//     console.log('Home sweet home!');
//     next()
// })
// app.use('/user',(req, res, next)=>{
//     res.send('<h1>Hello From User Page!</h1>')
//      console.log("User Page!");
// })

app.use("/user", (req, res, next) => {
  res.send("<h1>Hello From User Page!</h1>");
  console.log("User Page!");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello From Home!</h1>");
  console.log("Home sweet home!");
});


app.listen(3002)