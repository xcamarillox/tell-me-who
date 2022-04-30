import { useState } from "react/cjs/react.development";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Layout, message } from 'antd';

import { ACTIONS_LIST, getAPIdata } from "../scripts/api-helpers";
import MoviesList from "./MoviesList";
import ArtistCard from "./ArtistCard";
import SearchAndDrag from "./SearchAndDrag";
import ArtistFilter from "./ArtistFilter";
import Navbar from "./Navbar";

const App =  () => {
    const [artistArr, setArtistArr] = useState([]);
    const [artistID, setArtistID] = useState();
    const [artistInfo, setArtistInfo] = useState({});
    const [moviesArr, setMoviesArr] = useState([]);
    const [selectedPath, setSelectedPath] = useState('home');
    const navigate = useNavigate();

    const handleArtistSearch = async (searchedArtist) => {
        setArtistID(undefined);
        if (searchedArtist.trim().length != 0){
            try{
                const response = await getAPIdata({
                    type: ACTIONS_LIST.SEARCH_FOR_ARTIST,
                    searchedArtist
                })
                if (response && response.success!==false) setArtistArr(response.results);
                else throw new Error('Error del servidor');
                if (response.results.length == 0) message.error(`No se tuvieron resultados con ${searchedArtist.trim()}`);
                else if (response.results.length == 1) onClick({ id: response.results[0].id } )
                else {
                    navigate("/filter", { replace: true })
                    setSelectedPath('filter');
                }
            }catch(error){
                message.error(error.message);
            }
        }
    }

    const handleArtistPick = async ({id}) => {
        let response;
        let responseArr=[];
        setArtistID(id);
        try{
            response = await getAPIdata({
                type: ACTIONS_LIST.GET_ARTIST_DATA,
                person_id: id
            })
            if (response && response.success!==false) responseArr.push(response);
            else throw new Error('Error del servidor');
            response = await getAPIdata({
                type: ACTIONS_LIST.GET_FEATURING_MOVIES,
                person_id: id
            })
            if (response && response.success!==false) responseArr.push(response.cast);
            else throw new Error('Error del servidor');
            setArtistInfo(responseArr[0]);
            setMoviesArr(responseArr[1])
            navigate("/artist", { replace: true })
            setSelectedPath('artist');
        }catch(error){
            message.error(error.message);
        }
    }

    return (
        <>
            <Navbar selectedPath={selectedPath} setSelectedPath={setSelectedPath}/>
            <Routes>
                <Route path="home" element={
                    <SearchAndDrag handleArtistSearch={ handleArtistSearch } />
                }/>
                <Route path="filter" element={ 
                    <ArtistFilter onClick={ handleArtistPick } artistArr={ artistArr }/> 
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