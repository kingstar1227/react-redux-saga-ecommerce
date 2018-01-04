/**
*
* ProductCard
*
*/

import React, { PureComponent } from 'react';
import ProductButton from './ProductButton';

import './product-card.css';

export class ProductCard extends PureComponent {
  render() {
    const { product } = this.props;
    return (
      <li>
        <div className="category-product-wrap">
          <div
            className="category-product-image"
            style={{
              backgroundImage: `url(${product.image})`
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
    );
  }
}

ProductCard.propTypes = {

};

export default ProductCard;
