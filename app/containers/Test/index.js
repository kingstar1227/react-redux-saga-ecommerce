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

toggleSidebar = () => this.layout.classList.toggle('active__layout');

  render() {
    return (
      <div className="sidebar__layout active__layout" ref={ele => this.layout = ele}>
        <a  onClick={this.toggleSidebar} href="#menu"  className="__link">
          <span />
        </a>

        <div className="side__menu">
          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li>
                <a  onClick={this.toggleSidebar} href="#menu">
                  CLICK ME
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
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