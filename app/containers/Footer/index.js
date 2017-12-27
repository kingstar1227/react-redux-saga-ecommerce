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
import { Layout } from "antd";

// Modules constants
const LayoutFooter = Layout.Footer;

export class Footer extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return <LayoutFooter>Footer</LayoutFooter>;
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