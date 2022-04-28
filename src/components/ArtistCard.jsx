import { Image } from 'antd';
import { LikeFilled } from '@ant-design/icons';

import { getImgEndpoint } from '../scripts/api-helpers';
const getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
}

export default ({artist, className}) => {
    return (
        <div className={`artist-card${ className?' '+ className: '' }`}>
            <h1>{artist.name}</h1>
                { artist.profile_path && 
                    <Image src={ artist.profile_path && getImgEndpoint(artist.profile_path) } style={{ maxHeight: 400, padding:10 }} />
                }
            <h3>
                {artist.birthday} <br />
                ({getAge(artist.birthday)} años)
            </h3>
            <h3>
                { artist.gender==1? 'Mujer': (artist.gender==2? 'Hombre': 'Genero Indefinido')}
            </h3>
            <h3>
                Popularidad: <br />
                {artist.popularity} <LikeFilled style={{ color:'blue' }}/>
            </h3>
        </div>
    )
}