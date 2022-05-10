import express from "express";
import { getMovieByRating, getMovieById, deleteMovieById, updateMovieById, createMovie } from "./helper.js";

const router = express.Router();

// task - create /movies API
//  /movies
// app.get('/movies', function (req, res) {
//   res.send(movies);
// })

router.get('/', async function (req, res) {
    let filter = req.query;
    if (filter.rating) {
        filter.rating = +filter.rating;
    }
    console.log(filter);
    const allMovies = await getMovieByRating(req);      // converts the cursor into an array of data 
    res.send(allMovies);
})


//  get specific movie based on id
router.get('/:id', async function (req, res) {
    const { id } = req.params;
    // console.log(id);
    // db.movies.findOne({id:"104"})
    const movie = await getMovieById(id);
    console.log(movie);
    movie ? res.send(movie) : res.status(404).send({ msg: "movie not found" });
})


// delete movie based on id
router.delete('/:id', async function (req, res) {
    const { id } = req.params;
    // console.log(id);
    // db.movies.deleteOne({id:"104"})
    const result = await deleteMovieById(id);
    console.log(result);
    result ? res.send(result) : res.status(404).send({ msg: "movie not found" });
})


//  UPDATE specific movie based on id
router.put('/:id', async function (req, res) {
    const { id } = req.params;
    const updateData = req.body;
    console.log(id, updateData);

    // db.movies.updateOne({ id: "104" }, { $set: updateData })

    const result = await updateMovieById(id, updateData);
    result ? res.send(result) : res.status(404).send({ msg: "movie not found" });
})



// express.json() - middleware(inbuilt)
router.post('/', async function (req, res) {
    const newMovies = req.body;
    console.log(newMovies);
    // db.movies.insertMany(movies),
    const result = await createMovie(newMovies);
    res.send(result);
})


export const moviesRouter = router;



