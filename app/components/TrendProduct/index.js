/**
*
* TrendProduct
*
*/

import React from 'react';
import { Link } from 'react-router-dom'

// Css
import "./trendProduct.css"

const photoOne =
  "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190702/img1_fs9jmo.png";
const photoTwo =
  "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190723/img2_xwdocw.png";
const photoThree =
  "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190696/img3_q0fjgq.png";

class TrendProduct extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dispatchRoute } = this.props;
    return (

      <div className="outer-wrap-trending">
        <div
          className="trending-banner-wrap"
          style={{ backgroundImage: `url(${photoTwo})` }}
        >
          <div className="black-layer" />
          <Link to="/category" />
          <div className="trending-banner">
            <span />
            <div className="trending-banner-text">
              <div className="trending-banner-category">Shop Collections</div>
              <div>
                <span className="trending-banner-percentage">50%</span>
                <span className="trending-banner-off"> OFF</span>
              </div>
              <div className="trending-banner-name">Casual wear</div>
            </div>
            <span />
          </div>
        </div>
        <div
          className="trending-banner-wrap"
          style={{ backgroundImage: `url(${photoThree})` }}
        >
          <div className="black-layer" />
          <Link to="/category" />
          <div className="trending-banner">
            <span />
            <div className="trending-banner-text">
              <div className="trending-banner-category">Shop Collections</div>
              <div>
                <span className="trending-banner-percentage">50%</span>
                <span className="trending-banner-off"> OFF</span>
              </div>
              <div className="trending-banner-name">Casual wear</div>
            </div>
            <span />
          </div>
        </div>
        <div
          className="trending-banner-wrap"
          style={{ backgroundImage: `url(${photoOne})` }}
        >
          <div className="black-layer" />
          <Link to="/category" />
          <div className="trending-banner">
            <span />
            <div className="trending-banner-text">
              <div className="trending-banner-category">Shop Collections</div>
              <div>
                <span className="trending-banner-percentage">50%</span>
                <span className="trending-banner-off"> OFF</span>
              </div>
              <div className="trending-banner-name">Casual wear</div>
            </div>
            <span />
          </div>
        </div>
      </div>
    
    );
  }
}

TrendProduct.propTypes = {

};

export default TrendProduct;
