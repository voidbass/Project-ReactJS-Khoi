import React, { Component } from 'react';

export default class ProductsDetailTagInfo extends Component {
    render() {
        const { imgProduct } = this.props;
        return (
            <div>
                <div className="mb-5 mb-md-0 w-100">
                    <img className="img-fluid"
                         src={"/lib/imgs/"+imgProduct} alt={imgProduct} /></div>
                <div>
                    <h3 className="text-uppercase mb-4 title">The mark of legend</h3>
                    <p>
                        Tự hào được ghi là năm mà Tyffany &amp; Co là thành lập, bộ
                        sựu tập mang tính biểu tượng này cung cấp cho một cái gật đầu
                        với qua trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp
                        đường cong và đường nét mượt mà.
                    </p>
                </div>
            </div>
        );
    }
}