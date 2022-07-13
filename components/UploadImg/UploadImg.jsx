import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { setNewsForm } from '../../state/newsForm';

const props = {
	name: 'file',
	multiple: false,
	action: './upload',
	beforeUpload: true,

	onChange(info) {
		const { status } = info.file;

		// if (status !== 'uploading') {
		// 	console.log(info.file, info.fileList);
		// }

		setNewsForm({ titleImage: info.file });

		// if (status === 'done') {
		// 	message.success(`${info.file.name} file uploaded successfully.`);
		// } else if (status === 'error') {
		// 	message.error(`${info.file.name} file upload failed.`);
		// }
	},

	onDrop(e) {
		console.log('Dropped files', e.dataTransfer.files);
	},
};

const UploadImg = () => {
	return (
		<Upload {...props}>
			<Button icon={<UploadOutlined />}>Click to Upload</Button>
		</Upload>
	);
};

export default UploadImg;
