

import { Button } from "antd";

export default (props) => {
  return (
    <ul>
        { props.artistArr.map((artist) => 
            <li key={ artist.id }> 
                {artist.name} 
                <Button onClick={props.onClick} data-id={artist.id}>
                    Pick
                </Button> 
            </li>
        )}
    </ul>
  )
};