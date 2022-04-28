import { Layout, Row, Col } from 'antd';

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import { Input } from "antd";

import { ACTIONS_LIST, getAPIdata } from "../scripts/api-helpers";
import MoviesList from "./MoviesList";
import ArtistCard from "./ArtistCard";
import DragDrop from "./DragDrop";
import ArtistList from "./ArtistList";
import Navbar from "./Navbar";

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
    const [artistID, setArtistID] = useState();
    const [artistInfo, setArtistInfo] = useState({});
    const [moviesArr, setMoviesArr] = useState([]);

    const onSearch = async (searchedArtist) => {
        setArtistID();
        if (searchedArtist.trim().length != 0){
            const response = await getAPIdata({
                type: ACTIONS_LIST.SEARCH_FOR_ARTIST,
                searchedArtist
            })
            setArtistArr(response.results);
            if (response.results.length == 1) 
                onClick({ currentTarget:{ dataset:{ id: response.results[0].id }}})
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

    const inputSearchProps = {
        placeholder:"input search text",
        allowClear: true,
        enterButton:"Search",
        size:"large",
        onSearch
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="home" element={
                    <>
                        <DragDrop onSearch={onSearch}/>
                        <Input.Search {...inputSearchProps}/>
                    </>
                }/>
                <Route path="filter" element={ 
                    <ArtistList onClick={onClick} artistArr={artistArr}/> 
                }/>
                <Route path="artist"  element= {
                    <Layout>
                        <Layout.Sider className='sider-artist'>
                            { artistID && <ArtistCard artist={artistInfo} /> }
                        </Layout.Sider>
                        <Layout.Content>
                            <ArtistCard artist={artistInfo} className='top-artist' />
                            { artistID && 
                                <MoviesList moviesArr={moviesArr} />
                            }
                        </Layout.Content>
                    </Layout>
                }/>
                <Route path="*" element={<Navigate to='home'/>} />
            </Routes>
            
        </>
    );
}
export default App