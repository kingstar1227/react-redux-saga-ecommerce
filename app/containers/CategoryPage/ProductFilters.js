import React, { Component } from 'react';

const filters = [
  { name: "L", quantity: "24" },
  { name: "M", quantity: "34" },
  { name: "S", quantity: "45" },
  { name: "X", quantity: "102" },
  { name: "XL", quantity: "60" },
  { name: "XS", quantity: "78" },
  { name: "XXS", quantity: "35" }
];

export class ProductFilters extends Component {
  render() {
    return (
      <div className="filter-table-wrap">
      <div className="filter-table-title"><header>Filter by size</header></div>
      <div className="filter-table-btn-wrap">
        {filters.map((item, index) => (
          <button key={index} className="filter-table-btn">
            <span className="filter-table-name">{item.name}</span>
            <span className="filter-table-quantity">({item.quantity})</span>
          </button>
        ))}
      </div>
      </div>
    );
  }
}

export default ProductFilters;
