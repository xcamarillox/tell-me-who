import { Card, Image, Layout } from 'antd';

import { getImgEndpoint } from '../scripts/api-helpers';

export default ({artist}) => {
    return (
        <div style={{ width:'100%', marginTop:60, textAlign:'center' }}>
            <p>{artist.name}</p>
            {artist.profile_path && <Image src={ artist.profile_path && getImgEndpoint(artist.profile_path) } style={{ maxHeight: 500 }} />}
            <p>{artist.birthday}</p>
            <p>{artist.gender}</p>
            <p>{artist.popularity}</p>
        </div>
    )
}