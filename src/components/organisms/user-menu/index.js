import React, { useReducer } from 'react';
import './user-menu.css';
import { VerticalIconLabel } from '../../atoms';

export const UserMenu = ({ user }) => {

	return(
		user ?
			<VerticalIconLabel name="MENU" icon="person"/>
		:
			<div onClick={() => showLoginModal()} className="loginButton">Sign In</div>
	)
}