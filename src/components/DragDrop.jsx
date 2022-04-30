import { Upload, message, Image } from 'antd';

import { NOMADA } from '../scripts/api-helpers';
import logo from "../logo.png"

const { Dragger } = Upload;

export default (props) => {
  const draggerProps = {
    name: 'file',
    multiple: false,
    accept:"image/png, image/PNG, image/jpg, image/JPG, image/jpeg, image/JPEG",
    action: NOMADA.ENDPOINT,
    headers: { nomada: NOMADA.API_KEY_NOMADA },
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`El archivo ${info.file.name} se ha procesado correctamente`);
        props.onSearch(info.file.response.actorName);
      } else if (status === 'error') {
        message.error(`El archivo ${info.file.name} encontro errores`);
      }
    },
  };
  return (
    <Dragger {...draggerProps}>
      <h1>Tell me Who ??</h1>
      <Image preview={false} src={logo} style={{padding:10}} />
      <p className="ant-upload-text">Haz click o arrastra la imagen del actor/actriz acá...</p>
      <p className="ant-upload-hint">
        Descubre en que ha trabajado.
      </p>
    </Dragger>
  )
};