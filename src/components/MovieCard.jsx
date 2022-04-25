
import { Card } from 'antd';

export const MovieCard = ({movie}) => {
    return (
        <Card title={movie.title} extra={`${movie.vote_average}/10`} style={{ width: 300 }}>
            <p>{movie.overview}</p>
        </Card>
    )
}