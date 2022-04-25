
import { useEffect, useState } from "react/cjs/react.development";
import { MovieCard } from "./MovieCard";

import { ACTIONS_LIST, getAPIdata } from "../scripts/api-helpers";

const App =  () => {
    const [moviesArr, setMoviesArr] = useState([{id:0}]);
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await getAPIdata({
                type: ACTIONS_LIST.GET_MOVIES_FEATURING,
                person_id: 31 // Tom Hanks ID
            })
            setMoviesArr(response.cast)
        }
        fetchFunc();
    },[])

    return (
        <>
            { moviesArr.map((movie) => <MovieCard movie={movie} key={movie.id}/> ) }
        </>
    );
}
export default App