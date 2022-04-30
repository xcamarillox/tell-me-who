
import { Input } from 'antd';

import DragDrop from "./DragDrop";

export default (props) => {

    const inputSearchProps = {
        placeholder:"Buscar por nómbre acá...",
        allowClear: true,
        enterButton:"Buscar",
        size:"large",
        onSearch: props.handleArtistSearch
    }

    return (
        <div className='home'>
            <div style={{ maxWidth:300 }}>
                <DragDrop onSearch={ props.handleArtistSearch }/>
                <Input.Search {...inputSearchProps} style={{ marginTop: 10 }}/>
            </div>
        </div>
    )
}