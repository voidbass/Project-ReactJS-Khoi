import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProductsDetailTagInfo from './ProductsDetailTagInfo';
import ShareFB from './ShareFB';

export default class ProductsDetailTag extends Component {
	render() {
		return (
			<div className="detail_tab pb-5 col-lg-8 col-12">
                <Tabs>
                    <Tab eventKey="home" title="Đặc điểm nổi bật">
                        <ProductsDetailTagInfo imgProduct="vong1.png" />
                        <ProductsDetailTagInfo imgProduct="vong2.png" />
                        <ProductsDetailTagInfo imgProduct="vong3.png" />
                        <ProductsDetailTagInfo imgProduct="vong4.png" />
                    </Tab>
                    <Tab eventKey="profile" title="Thông tin sản phẩm">
                        Viet dai cai gi do thoi
                    </Tab>
                    <Tab eventKey="contact" title="Đánh giá">
                        <ShareFB/>
                    </Tab>
                </Tabs>
            </div>
		);
	}
}
