const API_KEY_NOMADA = process.env.API_KEY_NOMADA;
const API_KEY_MOVIEDB = process.env.API_KEY_MOVIEDB;

export const ACTIONS_LIST = {
    GET_MOVIES_FEATURING: 'GET_MOVIES_FEATURING'
}


export const getAPIdata = async (action) => {
    switch (action.type) {
        case ACTIONS_LIST.GET_MOVIES_FEATURING:
          const endpoint = `https://api.themoviedb.org/3/person/${action.person_id}/movie_credits?api_key=${API_KEY_MOVIEDB}&language=en-US`
          return await fetchFunctionGET(endpoint);
          break;
        case 'Mangoes':
        case 'Papayas':
          console.log('Mangoes and papayas are $2.79 a pound.');
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
            throw new Error('Nothing to fecth: no match for action.type');
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