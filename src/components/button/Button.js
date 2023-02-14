import React from 'react';
import './Button.css';

const Button = ({ children, value }) => (
	<button type='button' className='container' value={value}>
		{children}
	</button>
);

export default Button;
