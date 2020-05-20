import React, { useState, useRef, useEffect } from 'react';

const EditTextArea = (props) => {
	let content = props.children;
	const [text, setText] = useState(content);
	const element = useRef(null);

	useEffect(() => {
		window.addEventListener('click', detectClick);
	});

	const detectClick = (e) => {
		if (element.current === null) {
			window.removeEventListener('click', detectClick);
			return;
		}
		if (!element.current.contains(e.target)) {
			console.log('outside');
			props.toggleEdit();
			window.removeEventListener('click', detectClick);
		}
	};

	const onChange = () => {
		setText(element.current.value);
	};

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			props.upd(text);
		}
	};

	return (
		<textarea
			name='edit'
			ref={element}
			defaultValue={content}
			onChange={onChange}
			onKeyDown={handleKey}
			placeholder='edit day report...'
			id='report-text'
			className='smallTextArea'
		/>
	);
};

export default EditTextArea;
