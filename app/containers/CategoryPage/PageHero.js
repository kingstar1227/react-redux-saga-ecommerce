/**
*
* PageHero
*
*/

import React from 'react';
import "!!style-loader!css-loader!./page-image.css";

class PageHero extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="category-bd-crumbs">
        <div className="category-bd-layer"></div>
        <div className="crumb-wrap">
          <ul className="catscrumb">
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Shop</button>
            </li>
            <li>
              <button>Men clothing</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

PageHero.propTypes = {

};

export default PageHero;
