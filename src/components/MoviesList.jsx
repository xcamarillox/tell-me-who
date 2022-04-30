import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = ({moviesArr}) => {
    return (
        <div className='movies-list'>
            <h2 className='artist-movies'>Sus Películas</h2>
            { moviesArr.map((movie, index) => <MovieCard movie={movie} key={ index } />) }
        </div>
    )
}

const mapStateToProps = (state) => { return {moviesArr: state.moviesArr} }
export default connect(mapStateToProps)(MoviesList);