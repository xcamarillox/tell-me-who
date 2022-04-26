import { Card, Image } from 'antd';

import { getImgEndpoint } from '../scripts/api-helpers';

export const MovieCard = ({movie}) => {
    return (
        <Card title={`${movie.title} [Released: ${movie.release_date}]`} extra={`${movie.vote_average}/10`} style={{ width: '100%' }}>
            <Image src={ movie.poster_path && getImgEndpoint(movie.poster_path) } style={{ height: 300 }} />
            <p>{movie.overview}</p>
        </Card>
    )
}