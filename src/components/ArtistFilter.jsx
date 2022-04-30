import { connect } from "react-redux";
import { Card } from "antd";

import { getImgEndpoint } from '../scripts/api-helpers';

const ArtistFilter = (props) => {
  return (
    <div className='artist-card-filter' >
        { props.artistArr.map((artist, index) => 
            <Card
            onClick={ (event) => props.onClick({e:event, id:artist.id}) }
            key={ index }
            hoverable
            style={{ width: 200 }}
            cover={<img src={ artist.profile_path && getImgEndpoint(artist.profile_path) } />} >
              <Card.Meta 
              title={ artist.name } 
              description={
                artist.known_for.length!=0  && 
                <>
                  <p>Conocido por:</p>
                  {artist.known_for.map((movie) => <p key={ movie.id }>{movie.title}</p>)}
                </>
              } />
            </Card>
        )}
    </div>
  )
};

const mapStateToProps = (state) => { return { artistArr: state.artistArr } }
export default connect(mapStateToProps)(ArtistFilter);