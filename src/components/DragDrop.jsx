import { Upload, message, Image } from 'antd';

import { NOMADA } from '../scripts/api-helpers';
import logo from "../logo.png"

const { Dragger } = Upload;

export default (props) => {
  const draggerProps = {
    name: 'file',
    multiple: false,
    action: NOMADA.ENDPOINT,
    headers: { nomada: NOMADA.API_KEY_NOMADA },
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        props.onSearch(info.file.response.actorName);
      } else if (status === 'error') {
        message.error(`${info} file upload failed.`);
      }
    },
  };
  return (
    <Dragger {...draggerProps}>
      <h1>Tell me Who ??</h1>
      <Image preview={false} src={logo} style={{padding:10}} />
      <p className="ant-upload-text">Arrastra la imagen del actor/actriz acá...</p>
      <p className="ant-upload-hint">
        Soporta una imagen a la vez.
      </p>
    </Dragger>
  )
};