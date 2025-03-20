import { fetchFromTMDB } from "../services/tmdb.services.js"
import { User } from "../models/user.model.js";

export async function searchPerson(req, res) {
    try {
        const { query } = req.params;
        const person = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
        if(person.results.length === 0) {
            res.status(200).json({success: false, message: "No entries found"});
        }
        const update = [{
            id: person.results[0].id,
            image: person.results[0].profile_path,
            name: person.results[0].name,
            searchType: 'person',
            createAt: Date.now()
        }]
		await User.findOneAndUpdate(req.user._id, {$push: { searchHistory: update }});
        res.status(200).json({success: true, person});
    } catch (error) {
       console.error("Failed to search person: ", error) 
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

export async function searchMovie(req, res) {
    try {
        const { query } = req.params;
        const movies = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
        if(movies.results.length === 0) {
            res.status(200).json({success: false, message: "No entries found"});
        }
        const update = [{
            id: movie.results[0].id,
            image: movie.results[0].poster_path,
            name: movie.results[0].title,
            searchType: 'movie',
            createAt: Date.now()
        }]
		await User.findOneAndUpdate(req.user._id, {$push: { searchHistory: update }});
        res.status(200).json({success: true, movies});
    } catch (error) {
       console.error("Failed to search movie: ", error) 
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

export async function searchTV(req, res) {
    try {
        const { query } = req.params;
        const tv = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);
        if(tv.results.length === 0) {
            res.status(200).json({success: false, message: "No entries found"});
        }
        const update = [{
            id: movie.results[0].id,
            image: movie.results[0].poster_path,
            name: movie.results[0].title,
            searchType: 'tv',
            createAt: Date.now()
        }]
		await User.findOneAndUpdate(req.user._id, {$push: { searchHistory: update }});
        res.status(200).json({success: true, tv});
    } catch (error) {
        console.error("Failed to search tv: ", error) 
        res.status(500).json({success: false, message: "Internal server error"});
    }
}