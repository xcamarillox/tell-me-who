import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import { NOMADA } from '../scripts/api-helpers';

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
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </Dragger>
  )
};