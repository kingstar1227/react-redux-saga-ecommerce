/**
 *
 * Desktop component
 *
*/

import React, { Component } from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { Icon } from "antd";

import SearchForm from "containers/SearchForm";

// Logo
import mboLogo from "!file-loader?name=[mboLogo].[ext]!./images/mboLogo.png";

// Inline styles
const styles = {
  icon: {
    fontSize: 19,
    color: "#343434"
  }
};

export class Desktop extends Component {
  render() {
    const { dispatchRoute } = this.props;
    return (
      <ul className="desktop-nav-wrapper">
        <li className="nav-item-right nav-logo">
          <button onClick={() => dispatchRoute("/#")}>
            <img src={mboLogo} alt="" />
          </button>
        </li>


        <li className="nav-item-left">
          <button
            onClick={() => dispatchRoute("/signin")}
            className="btns-label"
          >
            Sign In
          </button>
        </li>

        <li className="nav-item-left">
          <button
            onClick={() => dispatchRoute("/products/checkout/")}
            className="btns-label"
          >
            Checkout
          </button>
        </li>
        <li className="nav-item-left">
          <button onClick={() => dispatchRoute("/products/cart/")} className="btns-icon">
            <Icon type="shopping-cart" style={styles.icon} />
          </button>
        </li>
        <li className="nav-item-left">
          <button
            onClick={() => dispatchRoute("/category/")}
            className="btns-icon"
          >
            <Icon type="heart-o" style={styles.icon} />
          </button>
        </li>
        <li className="nav-item-left">
          <div className="wrapper-search">
            <SearchForm />
          </div>
        </li>

      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchRoute: route => dispatch(push(route))
});

export default connect(null, mapDispatchToProps)(Desktop);