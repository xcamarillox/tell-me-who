
import { useEffect, useState } from "react/cjs/react.development";
import { MovieCard } from "./MovieCard";
import { ArtistCard } from "./ArtistCard";

import { ACTIONS_LIST, getAPIdata } from "../scripts/api-helpers";

const App =  () => {
    const [artist, setArtist] = useState({});
    const [moviesArr, setMoviesArr] = useState([]);
    useEffect(()=>{
        const fetchArtist = async () => {
            const response = await getAPIdata({
                type: ACTIONS_LIST.GET_ARTIST_DATA,
                person_id: 31 // Tom Hanks ID
            })
            console.log(response)
            if (response) setArtist(response)
        }
        const fetchMovies = async () => {
            const response = await getAPIdata({
                type: ACTIONS_LIST.GET_FEATURING_MOVIES,
                person_id: 31 // Tom Hanks ID
            })
            console.log(response)
            if (response) setMoviesArr(response.cast)
        }
        fetchArtist();
        fetchMovies();
    },[])

    return (
        <>
            <ArtistCard artist={artist} />
            { moviesArr.map((movie) => <MovieCard movie={movie} key={movie.id}/> ) }
        </>
    );
}
export default App