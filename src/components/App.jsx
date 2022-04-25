
import { useEffect, useState } from "react/cjs/react.development";
import { MovieCard } from "./MovieCard";

const App =  () => {
    const [moviesArr, setMoviesArr] = useState([{id:0}]);
    const API_KEY= process.env.API_KEY_MOVIEDB
    let person_id = 31 // Tom Hanks ID
    let endpoint = `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${API_KEY}&language=en-US`
    useEffect(()=>{
        console.log(endpoint)
        const fetchFunction = async ()=> {
            try {
                const response = await fetch(endpoint);
                if (response.ok) {
                    const jsonResponse = await response.json();
                    setMoviesArr(jsonResponse.cast);
                    console.log(jsonResponse.cast);
                    return jsonResponse;
                }
                throw new Error('Request failed! Response...', response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchFunction();
    },[])

    return (
        <>
            { moviesArr.map((movie) => <MovieCard movie={movie} key={movie.id}/> ) }
        </>
    );
}
export default App