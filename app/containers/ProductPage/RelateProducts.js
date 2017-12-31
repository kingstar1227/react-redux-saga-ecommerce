import React, { PureComponent } from 'react';
const photoOne =
  'http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190696/img3_q0fjgq.png';

const photoTwo =
  'http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190723/img2_xwdocw.png';

const photoThree =
  'http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190702/img1_fs9jmo.png';

const products = [
  {
    id: 1,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoOne
  },
  {
    id: 2,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoThree
  },
  {
    id: 6,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoTwo
  },
  {
    id: 4,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoOne
  },
  {
    id: 7,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoThree
  }
];

export class RelateProducts extends PureComponent {
  render() {
    return (
      <div className="product-related-product-wrap">
        <header className="product-related-product">Related Products</header>
        <div className="product-related-wrap">
          {products.map(product => (
            <div key={product.id}>
              <a href="#" />
              <div
                className="product-related-image"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="product-related-name">
                <span>{product.title}</span>
                <span>{`KES ${product.price}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RelateProducts;