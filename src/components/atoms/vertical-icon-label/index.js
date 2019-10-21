import React from 'react';
import './vertical-icon-label.css';

export const VerticalIconLabel = ({ name, icon, method }) =>

<div className="verticalIconLabel">
	<i className="material-icons">{icon}</i>
	<span>{name}</span>
</div>