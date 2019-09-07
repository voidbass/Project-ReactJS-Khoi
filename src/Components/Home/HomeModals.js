import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


export default class HomeModals extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<button className="btn btn-dark pt-0 pb-0 pl-2 pr-2 mt-2" type="button" onClick={this.handleShow}>Gửi</button>
				<Modal className="home__emailmodal" show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
					<Modal.Title className='text-center font-weight-bold' >GỬI EMAIL</Modal.Title>
					<Modal.Body className='text-center' >
						<span>Hãy gửi email của bạn liên hệ với chúng tôi để được tư vấn tốt nhất</span>
						<span className='mt-2 d-block'>Sự hài lòng của bạn là thành công của chúng tôi</span>
						<div>
							<input className="w-75 mt-4 mb-4 d-block mx-auto" type="text" placeholder="Email của bạn..." />
						</div>
						<a className="text-uppercase" href="/">Gửi email</a>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}