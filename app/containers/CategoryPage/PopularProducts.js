import React, { Component } from 'react';
import { Rate } from 'antd';

const popularProducts = [
  {
    description: "Alpha Block Black Polo Sleem T-Shirt",
    image:
      "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190702/img1_fs9jmo.png"
  },
  {
    description: "Alpha Block Black Polo Sleem T-Shirt",
    image:
      "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190696/img3_q0fjgq.png"
  }
];

export class PopularProducts extends Component {
  render() {
    return (
      <div className="popular-products-wrap">
        <div className="popular-products-title"><header>Popular products</header></div>
        {popularProducts.map((product, index) => (
          <div key={index} className="popular-products">
            <div className="popular-products-image">
              <img src={product.image} alt="" />
            </div>
            <div className="popular-products-details">
              <div>{product.description}</div>
              <div className="popular-products-stars">
                <div className="rate-demo-wrp">
                  <Rate disabled defaultValue={2} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PopularProducts;
