
import { useEffect, useState } from "react/cjs/react.development";

import { MovieCard } from "./MovieCard";
import { ArtistCard } from "./ArtistCard";

import { Input, Space, Button } from "antd";

import { ACTIONS_LIST, getAPIdata } from "../scripts/api-helpers";

const fetchArtist = async (person_id) => {
    return await getAPIdata({
        type: ACTIONS_LIST.GET_ARTIST_DATA,
        person_id
    })
}

const fetchMovies = async (person_id) => {
    return await getAPIdata({
        type: ACTIONS_LIST.GET_FEATURING_MOVIES,
        person_id
    })
}

const App =  () => {
    const [artistArr, setArtistArr] = useState([]);
    const [artistID, setArtistID] = useState({});
    const [artistInfo, setArtistInfo] = useState({});
    const [moviesArr, setMoviesArr] = useState([]);

    const onSearch = async (searchedArtist) => {
        if (searchedArtist.trim().length != 0){
            const response = await getAPIdata({
                type: ACTIONS_LIST.SEARCH_FOR_ARTIST,
                searchedArtist
            })
            setArtistArr(response.results)
        }
    }

    const onClick = async (e) => {
        let response;
        let artist_id = e.currentTarget.dataset.id;
        setArtistID(artist_id);
        response = await fetchArtist(artist_id)
        if (response) setArtistInfo(response);
        response = await fetchMovies(artist_id)
        if (response) setMoviesArr(response.cast);
    }

    return (
        <>
            <Space direction="vertical">
                <Input.Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Space>
            <ul>
                { artistArr.map((artist) => 
                    <li key={ artist.name }> 
                        {artist.name} 
                        <Button onClick={onClick} data-id={artist.id}>
                            Pick
                        </Button> 
                    </li>
                )}
            </ul>
            { artistID && <ArtistCard artist={artistInfo} /> }
            { artistID && moviesArr.map((movie) => <MovieCard movie={movie} key={movie.id}/> )}
        </>
    );
}
export default App