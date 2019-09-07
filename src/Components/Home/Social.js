import React, { Component } from 'react';
import Title from './Title';

export default class Social extends Component {
	render() {
		var Social__list = [
			{
				id: 1,
				button: "fab fa-facebook-f",
				name: "FACEBOOK"
			},
			{
				id: 2,
				button: "fab fa-twitter",
				name: "TWITTER"
			},
			{
				id: 3,
				button: "fab fa-instagram",
				name: "INSTAGRAM"
			},
			{
				id: 4,
				button: "fab fa-google-plus",
				name: "GOOGLE"
			},
			{
				id: 5,
				button: "fab fa-pinterest",
				name: "PINTEREST"
			},
			{
				id: 6,
				button: "fab fa-linkedin",
				name: "LINKEDIN"
			},
		]

		let elementsSocial = Social__list.map((social,index) => {
			return	<li key={social.id} className={"col-6 col-md-3 col-lg-2 text-center " + social.name } ><i className={ social.button }></i>
			        	<p className="d-inline font-weight-bold">  { social.name }  </p>
			        </li>
		});

		return (
			<aside className="hoc mt-4 mb-2 container">
				<ul className="row list-unstyled mb-3">
					{ elementsSocial }
				</ul>
				<Title />
			</aside>
		);
	}
}
