import { Card } from "antd";

import { getImgEndpoint } from '../scripts/api-helpers';

export default (props) => {
  return (
    <div className='artist-card-filter' >
        { props.artistArr.map((artist) => 
            <Card
            onClick={ (event) => props.onClick({e:event, id:artist.id}) }
            key={ artist.id }
            hoverable
            style={{ width: 200 }}
            cover={<img src={ artist.profile_path && getImgEndpoint(artist.profile_path) } />} >
              <Card.Meta 
              title={ artist.name } 
              description={
                artist.known_for.length!=0  && 
                <>
                  <p>Conocido por:</p>
                  {artist.known_for.map((movie) => <p>{movie.title}</p>)}
                </>
              } />
            </Card>
        )}
    </div>
  )
};