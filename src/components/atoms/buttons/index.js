import React from 'react';
import './buttons.css';

export const Button = ({ classnames, children }) =>

<button className={classnames}>
	{children}
</button>