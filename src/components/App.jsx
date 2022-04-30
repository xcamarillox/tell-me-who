import { useState, useEffect } from "react/cjs/react.development";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { Layout, message } from 'antd';

import { ACTIONS_LIST, getAPIdata } from "../scripts/api-helpers";
import MoviesList from "./MoviesList";
import ArtistCard from "./ArtistCard";
import SearchAndDrag from "./SearchAndDrag";
import ArtistFilter from "./ArtistFilter";
import Navbar from "./Navbar";

const App =  () => {
    const [artistArr, setArtistArr] = useState();
    const [artistInfo, setArtistInfo] = useState();
    const [moviesArr, setMoviesArr] = useState();
    const [selectedPath, setSelectedPath] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    const handleArtistSearch = async (searchedArtist) => {
        if (searchedArtist.trim().length != 0){
            try{
                const response = await getAPIdata({
                    type: ACTIONS_LIST.SEARCH_FOR_ARTIST,
                    searchedArtist
                })
                if (!(response && response.success!==false)) throw new Error('Error del servidor');
                if (response.results.length == 0) {
                    message.error(`No se tuvieron resultados con ${searchedArtist.trim()}`);
                    return;
                }
                setArtistArr(response.results)
                setArtistInfo();
                setMoviesArr();
                if (response.results.length == 1) handleArtistPick({ id: response.results[0].id } )
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

    useEffect(()=>{
      if (location.pathname != selectedPath) setSelectedPath(location.pathname.slice(1))
    }, [location])

    return (
        <>
            <Navbar 
            selectedPath={selectedPath} 
            artistArr={artistArr} 
            moviesArr={moviesArr}/>
            <Routes>
                <Route path="home" element={
                    <SearchAndDrag handleArtistSearch={ handleArtistSearch } />
                }/>
                <Route path="filter" element={ 
                    artistArr ?
                    <ArtistFilter onClick={ handleArtistPick } artistArr={ artistArr }/>:
                    <Navigate to='home'/>
                }/>
                <Route path="artist"  element= {
                    moviesArr ?
                    <Layout>
                        <Layout.Sider className='sider-artist'>
                            <ArtistCard artist={artistInfo} /> 
                        </Layout.Sider>
                        <Layout.Content>
                            <ArtistCard artist={artistInfo} className='top-artist' />
                            <MoviesList moviesArr={moviesArr} />
                        </Layout.Content>
                    </Layout>:
                    <Navigate to='home'/>
                }/>
                <Route path="*" element={<Navigate to='home'/>} />
            </Routes>
            
        </>
    );
}
export default App