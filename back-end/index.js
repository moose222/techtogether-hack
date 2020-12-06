//imports the firebase database object we can use
const db = require('./firebase-config')

//imports express so you can use it
const express = require('express')

//use this variable to use express
const app = express()
const cors = require('cors')

//imports axios
const axios = require('axios')

app.use(cors())
app.use(express.static('build'))
//eases use of json
app.use(express.json())


// END POINTS

//end point 3 
app.get('/get_song', (request, response) => {

  const title = request.body.title //"song title" ex "magic shop"

  try{

    //Gets a song with a particular name specified by the request
    axios.get('https://shazam.p.rapidapi.com/search', {
      params: {
        'term': title,
        'limit': 1,
      },
      headers: {
        'x-rapidapi-key' : 'c8936296a6msh4f298d73c33d088p1070c8jsn7b217e824682',
        'x-rapidapi-host' : 'shazam.p.rapidapi.com',
        'useQueryString' : true, 
      }
    })

    //Sends the song information back to the frontend
    .then(function(res) {
      
			const send_data = {
        "title": res.data.tracks.hits[0].track.title,
        "id": res.data.tracks.hits[0].track.key,
        "artist": res.data.tracks.hits[0].track.subtitle,
        "image": res.data.tracks.hits[0].track.share.image,
        

      }
      response.json(send_data)
    })
    
  } 
  catch(error){
    console.log(error)
  }
  //response.send(`<h1> This is end point 3!! </h1>`);
})



const unknownEndpoint = (request, response) => {
    response.status(400).send({error: 'unknown endpoint'})
  }
  
//use of middleware is denoted by following
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})