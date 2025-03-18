import { fetchMovieTrailers, fetchFromTMDB } from "../services/tmdb.services.js"

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export async function getTrendingMovie(req, res) {
    try {
    const movies = await fetchFromTMDB(url);  
    const randomMovie = movies.results[Math.floor(Math.random() * movies.results?.length)];
    res.status(200).json({success: true, content: randomMovie});
    } catch (error) {
       console.error("Failed to fetch movie: ", error) 
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

const movieTrailerUrl = 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';
export async function getMovieTrailers(req, res) {
    try {
    const {id} = req.params
    const trailers = await fetchMovieTrailers(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
    res.status(200).json({success: true, trailers: trailers.results});
    } catch (error) {
        if(error.message.includes("404")) {
            return res.status(404).send(null)
        }
        res.status(500).json({success: false, message: "Internal server error"});
    }
}