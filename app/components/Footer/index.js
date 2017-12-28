/**
 *
 * Footer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

// Modules
import { Layout, Icon } from "antd";

import "./footer.css";

// Modules constants
const LayoutFooter = Layout.Footer;
const styles = {
  footerWrap: {
    backgroundColor: "#2f2f30"
  }
}

export class Footer extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LayoutFooter style={styles.footerWrap}>
        <footer className="footer-nav">
          <ul>
            <li className="footer-contact-wrap">
              <span className="footer-title">CONTACT US</span>
              <ul className="second-ul contact">
                <li>
                  We are a team lorem ipsum dolor, lorem ipsum, this is dummy
                  text
                </li>
                <li className="footer-address">
                  <span>Address: Mombasa Kenya</span>
                  <span>Phone: +(254) 567 680</span>
                  <span>Email: info@mbo.co.ke</span>
                </li>
              </ul>
            </li>
            <li className="footer-service">
              <span className="footer-title">SERVICE</span>
              <ul className="second-ul">
                <li>Account</li>
                <li>Wishlist</li>
                <li>Shopping Cart</li>
                <li>Return policy</li>
                <li>Special</li>
                <li>Lookbook</li>
              </ul>
            </li>
            <li className="footer-insider">
              <span className="footer-title">INSIDER</span>
              <ul className="second-ul">
                <li>Account</li>
                <li>Wishlist</li>
                <li>Shopping Cart</li>
                <li>Return policy</li>
                <li>Special</li>
                <li>Lookbook</li>
              </ul>
            </li>
            <li className="footer-service">
              <span className="footer-title">SERVICE</span>
              <ul className="second-ul">
                <li>Account</li>
                <li>Wishlist</li>
                <li>Shopping Cart</li>
                <li>Return policy</li>
                <li>Special</li>
                <li>Lookbook</li>
              </ul>
            </li>
            <li>
              <span className="footer-title">Join Our Newsletter</span>
              <ul>
                <li className="footer-form">
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="email" />
                    <button>SUBMIT</button>
                  </form>
                </li>
                <li className="footer-share-btn">
                  <button>
                    <Icon type="facebook" />
                  </button>
                  <button>
                    <Icon type="youtube" />
                  </button>
                  <button>
                  <Icon type="twitter" />
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </LayoutFooter>
    );
  }
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Footer);