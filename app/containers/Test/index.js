/**
 *
 * Test
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

// Css
import './test.css';

export class Test extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  slideToggle = () => {
    console.log({node: this.menu})
    const originHeight = '100px';
    this.menu.style.transition = 'height 3s';
    const { height } = this.menu.ownerDocument.defaultView.getComputedStyle(this.menu, null);
    console.log({height})
    if (parseInt(height, 10) === 0) {
      this.menu.style.height = originHeight;
    } else {
      this.menu.style.height = '0px';
    }
  };

  render() {
    return (
      <nav className="cf">
        <ul className="cf" ref={ele => this.menu = ele}>
          <li>
            <a href="#">Item 0</a>
          </li>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
        </ul>
        <a href="#" id="openup" onClick={this.slideToggle}>
          MENU
        </a>
      </nav>
    );
  }
}

Test.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Test);