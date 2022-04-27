import { Card, Image } from 'antd';

import { getImgEndpoint } from '../scripts/api-helpers';

export default ({movie}) => {
    return (
        <Card title={`${movie.title} [Released: ${movie.release_date}]`} extra={`${movie.vote_average}/10`} style={{ width: '100%' }}>
            {movie.poster_path && <Image src={ movie.poster_path && getImgEndpoint(movie.poster_path) } style={{ height: 300 }} />}
            <p>{movie.overview}</p>
        </Card>
    )
}