import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [jokes, getJokes] = useState([])


  useEffect(() => {
    axios.get('/api/jokes')
      .then(function (response) {
        getJokes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  })

  return (
    <>
      <h1 className=' text-gray-100 text-center text-4xl m-5'>Jokes: {jokes.length}</h1>

      {
        jokes.map((joke, index) => (
          <div className='text-gray-100 text-center'>
            <p>{joke.id}</p>
            <p>{joke.title}</p>
            <p>{joke.joke}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
