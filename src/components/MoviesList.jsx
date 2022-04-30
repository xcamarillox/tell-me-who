import MovieCard from "./MovieCard";

export default ({moviesArr}) => {
    return (
        <div className='movies-list'>
            <h2 className='artist-movies'>Sus Películas</h2>
            { moviesArr.map((movie, index) => <MovieCard movie={movie} key={ index } />) }
        </div>
    )
}