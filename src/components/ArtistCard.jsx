import { Card, Image } from 'antd';

import { getImgEndpoint } from '../scripts/api-helpers';

export default ({artist}) => {
    return (
        <Card title={artist.name} extra='' style={{ width: '100%' }}>
            {artist.profile_path && <Image src={ artist.profile_path && getImgEndpoint(artist.profile_path) } style={{ height: 300 }} />}
            <p>{artist.birthday}</p>
            <p>{artist.gender}</p>
            <p>{artist.popularity}</p>
        </Card>
    )
}