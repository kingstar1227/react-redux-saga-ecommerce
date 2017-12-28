/**
*
* SloganBanners
*
*/

import React from "react";
import { Row, Col } from "antd";

// Css
import "./slogan-banners.css";

class SloganBanners extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="slogan-banners-wrap">
        <div className="assurance-discount as-wrap">
          <div className="assurance-icons">
            <span className="fa-stack fa-lg">
              <i className="fa fa-certificate fa-stack-2x" />
              <i className="fa fa-percent fa-stack-1x fa-inverse" />
            </span>
          </div>
          <div>
            <span className="assurance-label">Member Discount</span>
            <span className="assurance-text">25% on order over $199</span>
          </div>
        </div>
        <div className="assurance-payment as-wrap">
          <div className="assurance-icons">
            <span className="fa-stack fa-lg assurance-payment-icons">
              <i className="fa fa-credit-card fa-stack-2x" />
              <i className="fa fa-lock fa-stack-1x" />
            </span>
          </div>
          <div>
            <span className="assurance-label">100% secure payments</span>
            <span className="assurance-text">
              Mpesa/Credit/Debit Card/Banking
            </span>
          </div>
        </div>
        <div className="assurance-pricing as-wrap">
          <div className="assurance-icons">
            <span className="fa-stack fa-lg">
              <i className="fa fa-tag fa-stack-2x" />
            </span>
          </div>
          <div>
            <span className="assurance-label">Reasonable pricing</span>
            <span className="assurance-text">
              To establish a selling price for a product
            </span>
          </div>
        </div>
      </div>
    );
  }
}

SloganBanners.propTypes = {};

export default SloganBanners;