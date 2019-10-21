import React from 'react';
import './header.css';
import mainLogo from '../../../images/logo.svg';
import { UserMenu } from '../';

export const Header = () =>

<header className="mainHeader">
	<img className="mainLogo" src={mainLogo}/>
	<UserMenu user={false}/>
</header>
