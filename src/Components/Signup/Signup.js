import React, { Component } from 'react';
import './style/Signup.scss';
import { connect } from 'react-redux';

class Signup extends Component {
	constructor(props){
		super(props);
		this.createRefComponent();
		this.SubmitHandler = this.SubmitHandler.bind(this);
	}

	createRefComponent() {
		this.firstname = React.createRef();
		this.lastname = React.createRef();
		this.email = React.createRef();
		this.password = React.createRef();
		this.passConfirm = React.createRef();
	}

	SubmitHandler(event) {
		const { users } = this.props;
		const firstname = this.firstname.current.value;
		const lastname = this.lastname.current.value;
		const email = this.email.current.value;
		const password = this.password.current.value;
		const passConfirm = this.passConfirm.current.value;
		
		if (this.checkPassword(password, passConfirm)) {
			let id = 1;
			if (users) {
				id = users[users.length - 1].id + 1;
			}

			if (!firstname || !lastname || !email || !password || !passConfirm) {
				alert("Nhập thông tin đã chứ bạn!!");
			} else {
				const obj = {id, firstname, lastname, email, password, role: 2};
				this.pushSignIn(obj);
				alert("Đăng kí thành công rồi :O !!");
				window.location.href = '/sign-in';
			}
		} else {
			alert("Sai Pass rồi má ơi :( ");
		}
	}

	checkPassword(password, passConfirm) {
		if (password === passConfirm) return true;
		return false;
	}

	async pushSignIn(obj) {
		// POST register
		await fetch('http://5d230e064e05c600146efa7e.mockapi.io/mandala/users', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(obj)
		});
	}

	render() {
		return (
			<div className="pt-5 container" id="signup">
				<div className="pt-5">
					<h1 className="font-weight-bold d-block mb-3">ĐĂNG KÝ</h1>
					<form className="p-5 form__signup">
						<h4 className="font-weight-bold d-block">THÔNG TIN CÁ NHÂN</h4>
						<div className="form-group">
							<label className="font-weight-bold d-block d-block pt-3">Tên trước*</label>
							<input  className="form-control"
									id="firstname"
									type="text"
									ref={this.firstname}
									required="required" />
						</div>
						<div className="form-group">
							<label className="font-weight-bold d-block pt-3">Tên sau*</label>
							<input  className="form-control"
									id="lastname"
									type="text"
									ref={this.lastname}
									required="required" />
						</div>
						<div className="form-group">
							<label className="font-weight-bold d-block pt-3">Email*</label>
							<input className="form-control"
									id="email"
									type="email"
									ref={this.email}
									required="required" />
						</div>
						<input className="d-inline mt-3" type="checkbox" />
						<p className="p-3 d-inline font-weight-bold">Đăng ký nhận bản tin</p>
						<h4 className="font-weight-bold d-block pt-3">THÔNG TIN ĐĂNG NHẬP</h4>
						<div className="form-group">
							<label className="font-weight-bold d-block pt-3">Mật khẩu*</label>
							<input className="form-control"
									id="passWord"
									type="password"
									ref={this.password}
									required="required"/>
						</div>
						<div className="form-group">
							<label className="font-weight-bold d-block pt-3">Xác nhận mật khẩu*</label>
							<input className="form-control"
									id="passWord"
									type="password"
									ref={this.passConfirm}
									required="required"/>
						<br />
						</div>
						<button onClick={this.SubmitHandler} className="btn btn-dark mt-3">Gửi</button>
						<button onClick={this.props.history.goBack} className="btn btn-dark mt-3 float-right"><i className="fa fa-undo"></i> Quay lại</button>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.userreducer,
	}
}


export default connect(mapStateToProps, null)(Signup);