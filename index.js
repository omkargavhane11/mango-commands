const express = require('express')
const app = express()

const PORT = 3000;

const movies = [
    {
      id: 1,
      name: "Vetaikkaran",
      language: "Tamil",
      "Song writer": "Vennelakanthi"
    },
    {
      id: 2,
      name: "Velaiyilla Pattathari",
      language: "Tamil",
      "Song writer": "Dhanush"
    },
    {
      id: 3,
      name: "Master",
      language: "Tamil",
      "Song writer": "Vimal Kashyap"
    },
    {
      id: 4,
      name: "Tenet",
      language: "English"
    },
    {
      id: 5,
      name: "Interstellar",
      language: "English"
    },
    {
      id: 6,
      name: "Bahubali",
      language: "Telugu",
      "Song writer": "Shiva Shakti Datta"
    }
  ];


app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.get('/movies', function (req, res) {
//     res.send(movies)
//   })

// filtering movies based on rating 
app.get('/movies', function (req, res) {
    const {rating} = req.params;
    console.log(req.query);
    const movie = movies.filter((mv)=> mv.rating == rating)
    rating ? res.send(rating) : res.status(404).send({msg : "not found"});
    res.send(movies)
  }) 


//finding a specific movie
app.get('/movies/:id', function (req, res) {
    const {id} = req.params;
    // console.log(id);
    const movie = movies.find((mv)=> mv.id == id)
    movie ? res.send(movie) : res.status(404).send({msg : "not found"});
  }) 


app.listen(PORT, () => console.log(`Started server at ${PORT}`));



