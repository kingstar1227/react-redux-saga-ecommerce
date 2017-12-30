import React, { PureComponent } from 'react';
import ProductButton from './ProductButton';

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
    image: photoOne,
  },
  {
    id: 2,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoThree,
  },
  {
    id: 6,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoThree,
  },
  {
    id: 4,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoOne,
  },
  {
    id: 7,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoOne,
  },
  {
    id: 5,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoTwo,
  },
  {
    id: 8,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoTwo,
  },
  {
    id: 9,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoThree,
  },
  {
    id: 3,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoTwo,
  },
  {
    id: 10,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoOne,
  },
  {
    id: 11,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoTwo,
  },
  {
    id: 12,
    title: 'United Colors of Benetton',
    price: 1200,
    image: photoThree,
  },
];

export class ProductCard extends PureComponent {
  render() {
    return (
      <div>
        <ul className="category-product">
          {products.map((product, index) => (
            <li key={product.id}>
              <div className="category-product-wrap">
                <div
                  className="category-product-image"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  <ProductButton />
                </div>
                <div className="category-product-desc">
                  <span>{product.title}</span>
                  <span>{`KES ${product.price}`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductCard;