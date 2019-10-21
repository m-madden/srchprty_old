import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Button } from "../../atoms/";
import { Header } from "../../organisms";

export const Home = () => {
	return (
		<>
			<Header/>
			<div className="Home">
				<div className="cta-image-container">
					<img src="#"/>
				</div>
				<div className="cta-content">
					<h2 className="cta-text" >Reunite Pets with their&nbsp;Owners</h2>
					<Button classnames="cta important">Sign Up</Button>
					<Link to="#howtoanchor" className="cta howitworksLink">
						<p className="cta howitworks">How it works</p>
						<i className="material-icons cta bounce-arrow">arrow_downward</i>
					</Link>
				</div>
				<p id="howtoanchor">How it works stuff here!</p>
			</div>
		</>
	);
}
