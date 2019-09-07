import React, { Component } from 'react';
import Blog from './Blog';
import AboutUs from './AboutUs';
import Newsletter from './Newsletter';

export default class Title extends Component {
	render() {
		return (
			<ul className='row list-unstyled mt-5 mb-5 ml-1 mr-1'>
				<AboutUs />
				<Blog />
				<Newsletter />
			</ul>
		);
	}
}
