import React, { Component } from 'react';
import './styles/Blog.scss';
import { connect } from "react-redux";
// import { mapStateToProps, mapDispatchToProps } from './../../Store/Actions/BlogStore';
// import { Link } from 'react-router-dom';

class BlogItem extends Component {
	componentDidMount(){
		this.props.getBlogData()
	}
	render() {
		// console.log("blog",this.props.blogdata)
		var data_blog;
		if (this.props.blogdata) {
			data_blog = this.props.blogdata.map((blog,index) => {
			return 	<li key={blog.id} className={"col-12 col-md-6 col-lg-4 mt-3 mb-2 "+ blog.classes}>
					<Link to={"/BlogDetail"}>
						<div className="Blog__item" style={{backgroundImage: 'url(/lib/imgs/'+blog.img + ')'}} />
					</Link>
					<div className="Blog__img--clear1"></div>
					<div className="Blog__img--clear2"></div>
					<p className="Blog__font__title font-weight-bold text-uppercase">{blog.title}</p>
					<hr />
					<p className="Blog__font--min">{blog.content}</p>
					<p className="Blog__font--min mt-1 font-italic">{blog.by}</p>
					<hr />
					<div className="Blog__font--min row inspace-15 pt-0">
						<p className="col-lg-6 col-6 col-md-6 text-left">Đọc thêm <i className="fa fa-angle-right" style={{border: 'none'}}></i></p>
						<p className="col-lg-6 col-md-6 col-6 text-right">{blog.comment} Bình luận</p>
					</div>
				</li>
			})
		} 
		return (
			<>
				{data_blog}
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogItem); 