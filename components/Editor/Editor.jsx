import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

import 'react-quill/dist/quill.snow.css';
import { setNewsForm } from '../../state/newsForm';

const Editor = () => {
	const [value, setValue] = useState('');

	useEffect(() => {
		setNewsForm({ html: value });
	}, [value]);

	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
			['link', 'image'],
			[{ align: [] }],
		],
		clipboard: { matchVisual: false },
	};

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'align',
	];

	return (
		<>
			<ReactQuill
				theme="snow"
				value={value}
				onChange={setValue}
				modules={modules}
				formats={formats}
				placeholder="Введите вашу новость"
			/>
			{/* <div className="view ql-editor" dangerouslySetInnerHTML={{ __html: value }}></div> */}
		</>
	);
};

export default Editor;
