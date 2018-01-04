import React, { PureComponent } from 'react';

export default class ProductLoader extends PureComponent {
  render() {
    const { product } = this.props;
    return (
      <li>
        <div className="category-product-wrap">
          <div className="category-product-image">
            <div className="animated-background" />
          </div>
          <div className="category-product-desc" />
        </div>
      </li>
    );
  }
}