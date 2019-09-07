import React, { Component } from 'react';
import './style/Home.scss';
import Banner from './Banner';
import Info from './Info';
import Item from './Item';
import Bonus from './Bonus';
import Slide from './Slide';
import Social from './Social';

export default class Home extends Component {
    render() {
        return (
            <div>
            	<main id="Home__Main">
	                <Banner />
                    <Bonus />
                    <Info />
                    <Slide />
                    <Item />
                    <Social />
                </main>
            </div>
        )
    }
}