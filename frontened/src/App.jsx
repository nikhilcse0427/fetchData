import axios from 'axios'
 import {useState,useEffect} from 'react'
import './App.css'

function App() {
  const [jokes,setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(`error : ${error}`)
    })
  },[])

  return (
    <>
      <h1>Jokes</h1>
     {
     jokes.map((joke=>(
        <div key = {jokes.id}>
          <h1>{joke.title}</h1>
          <h2>{joke.content}</h2>
        </div>
     )))
      }
    </>
  )
}

export default App
