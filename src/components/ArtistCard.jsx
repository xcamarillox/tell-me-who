import { connect } from 'react-redux';
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

const ArtistCard = ({artistInfo, className}) => {
    return (
        <div className={`artist-card${ className?' '+ className: '' }`}>
            <h1>{artistInfo.name}</h1>
                { artistInfo.profile_path && 
                    <Image src={ artistInfo.profile_path && getImgEndpoint(artistInfo.profile_path) } style={{ maxHeight: 400, padding:10 }} />
                }
            <h3>
                {artistInfo.birthday? artistInfo.birthday: undefined} <br />
                {!artistInfo.deathday? (artistInfo.birthday? getAge(artistInfo.birthday) + ' años':'') : 'Fallecido'}
            </h3>
            <h3>
                { artistInfo.gender==1? 'Mujer': (artistInfo.gender==2? 'Hombre': 'Genero Indefinido')}
            </h3>
            <h3>
                { artistInfo.known_for_department? 'Conocid'+String.fromCharCode(64)+ ' por:': undefined } <br />
                { artistInfo.known_for_department=='Acting'? 'Actuar': (artistInfo.known_for_department=='Directing'? 'Dirigir': artistInfo.known_for_department)}
            </h3>
            <h3>
                Popularidad: <br />
                {Math.floor(artistInfo.popularity)} <LikeFilled style={{ color:'blue' }}/>
            </h3>
        </div>
    )
}

const mapStateToProps = (state) => { return {artistInfo: state.artistInfo} }
export default connect(mapStateToProps)(ArtistCard);