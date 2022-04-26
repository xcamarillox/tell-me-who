const API_KEY_NOMADA = process.env.API_KEY_NOMADA;
const API_KEY_MOVIEDB = process.env.API_KEY_MOVIEDB;

export const ACTIONS_LIST = {
    GET_FEATURING_MOVIES: 'GET_FEATURING_MOVIES',
    GET_ARTIST_DATA: 'GET_ARTIST_DATA',
    SEARCH_FOR_ARTIST: 'SEARCH_FOR_ARTIST'
}

export const getImgEndpoint = (img_path) => 'https://image.tmdb.org/t/p/w500' + img_path;

export const getAPIdata = async (action) => {
    let endpoint
    switch (action.type) {
        case ACTIONS_LIST.GET_FEATURING_MOVIES:
          endpoint = `https://api.themoviedb.org/3/person/${action.person_id}/movie_credits?api_key=${API_KEY_MOVIEDB}&language=en-US`
          return await fetchFunctionGET(endpoint);
        case ACTIONS_LIST.GET_ARTIST_DATA:
          endpoint = `https://api.themoviedb.org/3/person/${action.person_id}?api_key=${API_KEY_MOVIEDB}&language=en-US`
          return await fetchFunctionGET(endpoint);
        case ACTIONS_LIST.SEARCH_FOR_ARTIST:
          endpoint = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY_MOVIEDB}&language=en-US&page=1&include_adult=false&query=${action.searchedArtist}`
          return await fetchFunctionGET(endpoint);
        default:
            throw new Error('Nothing to fetch: no match for action.type');
      }
      
} 

const fetchFunctionGET = async (endpoint)=> {
    try {
        const response = await fetch(endpoint);
        if (response.ok) return await response.json();
        throw new Error('Request failed! Response...', response);
    } catch (error) {
        console.log(error);
    }
}