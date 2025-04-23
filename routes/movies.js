var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    let movieTitle = req.body.title;
    fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}` )
    .then(response => response.json())
    .then(data => {
        res.json(
            {movies: data.results}
        );
    })
})

module.exports = router;