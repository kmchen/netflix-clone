import axios from "axios"
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ENV_VARS.TMDB_ACCESS_TOKEN}`,
        }
    };
    const resp = await axios.get(url, options);
    if(resp.status != 200) {
        throw new Error(`Failed to fetch data from TMDB ${resp.statusText}`)
    }
    return resp.data;
}

export const fetchMovieTrailers = async (url) => {
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ENV_VARS.TMDB_ACCESS_TOKEN}`,
    }
    };

    const resp = await axios.get(url, options);
    if(resp.status != 200) {
        throw new Error(`Failed to fetch movie trailers from TMDB ${resp.statusText}`)
    }
    return resp.data;
}

export const fetchMovieDetails = async (url) => {
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ENV_VARS.TMDB_ACCESS_TOKEN}`,
    }
    };

    const resp = await axios.get(url, options);
    if(resp.status != 200) {
        throw new Error(`Failed to fetch movie details from TMDB ${resp.statusText}`)
    }
    return resp.data;
}