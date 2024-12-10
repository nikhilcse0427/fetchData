const dotenv = require('dotenv');
dotenv.config();


const path = require('path');
const express = require('express')
const app = express()

const port = process.env.PORT || 3000
// app.use(express.static('dist'))
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id : 1,
      title : "1st joke",
      content : "give a short joke Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 2,
      title: "2nd joke",
      content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      id: 3,
      title: "3rd joke",
      content: "Why don't skeletons fight each other? They don't have the guts."
    },
    {
      id: 4,
      title: "4th joke",
      content: "Why was the math book sad? Because it had too many problems."
    },
    {
      id: 5,
      title: "5th joke",
      content: "What do you call fake spaghetti? An impasta!"
    },
    {
      id: 6,
      title: "6th joke",
      content: "Why did the bicycle fall over? Because it was two-tired!"
    }
    
  ]
  res.send(jokes)
})

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})