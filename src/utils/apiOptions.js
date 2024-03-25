
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:process.env.REACT_APP_NetFlix_Api_key
    

    }
  
  
    };
    export const SEARCH_QUERY = "https://api.themoviedb.org/3/search/movie?query="
    // export const Movie_Trailer=`https://api.themoviedb.org/3/movie/{movie_id}/videos`
    export const POSTER_API="https://image.tmdb.org/t/p/w500"
    export const  NOW_PLAYING_API ='https://api.themoviedb.org/3/movie/now_playing?&page=1'
    export const POPULER_API = " https://api.themoviedb.org/3/movie/popular"
    export const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated"
    export const UP_COMING = "https://api.themoviedb.org/3/movie/upcoming"
  
    export const search_Movie = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
  