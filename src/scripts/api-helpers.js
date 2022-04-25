const API_KEY_NOMADA = process.env.API_KEY_NOMADA;
const API_KEY_MOVIEDB = process.env.API_KEY_MOVIEDB;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const ACTIONS_LIST = {
    GET_MOVIES_FEATURING: 'GET_MOVIES_FEATURING'
}

export const getImgEndpoint = (img_path) => {
    return IMG_URL + img_path;
}

export const getAPIdata = async (action) => {
    switch (action.type) {
        case ACTIONS_LIST.GET_MOVIES_FEATURING:
          const endpoint = `https://api.themoviedb.org/3/person/${action.person_id}/movie_credits?api_key=${API_KEY_MOVIEDB}&language=en-US`
          return await fetchFunctionGET(endpoint);
        default:
            throw new Error('Nothing to fetch: no match for action.type');
      }
      
} 

const fetchFunctionGET = async (endpoint)=> {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request failed! Response...', response);
    } catch (error) {
        console.log(error);
    }
}