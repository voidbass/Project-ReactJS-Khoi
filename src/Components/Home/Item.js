import React, { Component } from 'react';
import ItemItemHot from './ItemItemHot';
import ItemItemNew from './ItemItemNew';
import ItemItemSpecial from './ItemItemSpecial';
import { Route, Link, Switch } from "react-router-dom";

class Item extends Component {
	render() {
		var Item__list = [
			{
				id: 1,
				content: "Sản phẩm mới",
				to: "ItemItemNew"
			},
			{
				id: 2,
				content: "Sản phẩm bán chạy",
				classes: "Item__list--highlight",
				to: "ItemItemHot"
			},
			{
				id: 3,
				content: "Sản phẩm đặc biệt",
				to: "ItemItemSpecial"
			}
		];

		let elementsItem__List = Item__list.map((Item, index) => {
			return	<li key={Item.id} className="d-inline col-12 col-lg-4 font-weight-bold p-2 ">
						<Link to={"/home/"+Item.to} className= {Item.classes}> {Item.content} </Link>
					</li>
		})

		return (
			<section className="container mw-100 border overflow-hidden" style={{ backgroundImage: 'url(/lib/imgs/background-items.png)' }}>
				<ul className="hoc text-center font-italic mt-5 row">
					{elementsItem__List}
				</ul>
				<img alt="underline" className="text-center item1" src="/lib/imgs/gachduoi-item.png" />
				<Switch>
					<Route exact path="/" component={ItemItemHot} />
					<Route path="/home/ItemItemHot" component={ItemItemHot} />
					<Route path="/home/ItemItemNew" component={ItemItemNew} />
					<Route path="/home/ItemItemSpecial" component={ItemItemSpecial} />
				</Switch>
			</section>
		);
	}
}

export default (Item);
