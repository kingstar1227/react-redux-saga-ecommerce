/**
 *
 * ProductPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageHero from 'components/PageHero';
import SubNavbar from 'components/SubNavbar'

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ProductPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SubNavbar />
        <PageHero />
      </div>
    );
  }
}

ProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productpage: makeSelectProductPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'productPage', reducer });
const withSaga = injectSaga({ key: 'productPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductPage);
