import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './styles/Contact.scss';
import MapContainer from './MapContainer';
import HomeModals from '../Home/HomeModals';

export default class ContactUs extends Component {
	render() {
		var ContactUs__form =[
			{
				label: "Tên",
				height: "2em"
			},
			{
				label: "Email",
				height: "2em"
			},
			{
				label: "Tin nhắn",
				height: "12em"
			}
		]

		let elementsContactUs__Form = ContactUs__form.map((form,index) => {
			return	<div key={index} className="row Contact__font--min">
						<label className="pr-0 d-inline font-weight-bold mt-2 col-lg-2">{form.label}*</label>
						<input className="pr-0 d-inline col-lg-9 mt-2" type="text" style={{width: '95%', height: form.height}} />
					</div>
		})

		return (
			<div className="pt-5">
				<div className="pt-5"></div>
				<div className="hoc mb-3 container">
					<div className="pt-3 row" id="Contact">
						<h1 className="font-weight-bold pb-2 col-lg-12">LIÊN HỆ</h1>
						<div className="col-lg-6">
							<MapContainer />
						</div>
						<div className="col-lg-6 pl-1">
							<h3 className='font-weight-bold'>GỬI EMAIL CHO CHÚNG TÔI</h3>
							{elementsContactUs__Form}
							<HomeModals />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
