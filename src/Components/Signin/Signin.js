import React, { Component } from 'react';
import './style/Signin.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Signin extends Component {
	constructor(props){
		super(props);

		this.onSubmitHandler = this.onSubmitHandler.bind(this);
		this.email = React.createRef();
		this.pass = React.createRef();
	}

	onSubmitHandler(){
		const email = this.email.current.value;
		const pass = this.pass.current.value;
		this.notifycationLogin(email, pass);
	}

	notifycationLogin(email, pass) {
		const { getUserData } = this.props;
		let tempUsers = [];
		for(var user of getUserData) {
			if(user) {
				tempUsers.push(user);
			}
		}

		let findEmail = tempUsers.find((us) => us.email === email); // Find Email admin
		let idxEmail = tempUsers.findIndex((us) => us.email === email); // Find email
		let idxPass = tempUsers.findIndex(us => us.password === pass); // Find password

		if (idxEmail <= -1) alert("Email không tồn tại !!");
		else if(findEmail.role === 1) alert("Vui lòng đăng nhập bằng tài khoản user !!");
			else {
				if (idxPass <= -1) alert("Mật khẩu không đúng !!!");
				else {
					const user = tempUsers.find((us) => us.email === email);
					alert("Đăng nhập thành công !!!");

					localStorage.setItem("logon", JSON.stringify({name: user.lastname, id: user.id, check: true}));

					window.location.href = '/';
				}
			}
	}

	render() {
		let tempUsers = JSON.parse(localStorage.getItem('logon'));
		if (!tempUsers) tempUsers = [];
		if(tempUsers.check){
			return 	<div className="container pt-5" id="login">
						<div className="pt-5">
							<h2 className='text-center'>Bạn đã đăng nhập rồi! <Link to='profile'>Profile</Link></h2>

						</div>
					</div>
		} else
		return (
			<div className="container pt-5" id="login">
				<div className="pt-5">
					<h1 className="font-weight-bold mb-4 d-inline">ĐĂNG NHẬP</h1>
					<Link to='/sign-up'><button className="btn btn-dark text-uppercase d-inline float-right">Đăng ký</button></Link>
					<form className="p-5 form__login">
						<h4 className="font-weight-bold">KHÁCH HÀNG ĐĂNG KÝ</h4>
						<p className="font-weight-bold d-block mb-4">Nếu bạn có 1 tài khoản, xin vui lòng đăng nhập</p>
						<div className="form-group">
							<label className="font-weight-bold d-block mt-4">Địa chỉ email*</label>
							<input className="form-control" ref={this.email}
									type="email" required="required" />
						</div>
						<div className="form-group">
							<label className="font-weight-bold mt-4 d-block">Xác nhận mật khẩu*</label>
							<input className="form-control" ref={this.pass}
									type="password" required="required" />
						</div>
						<p className="font-weight-bold mt-4">Quên Mật Khẩu?</p>
						<button onClick={this.onSubmitHandler} className="btn btn-dark text-uppercase">Đăng nhập</button>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		getUserData: state.userreducer
	}
}

export default connect(mapStateToProps, null)(Signin);