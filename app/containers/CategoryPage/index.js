/**
 *
 * CategoryPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCategoryPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// Css
import './category-page.css';

export class CategoryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

CategoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  categorypage: makeSelectCategoryPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'categoryPage', reducer });
const withSaga = injectSaga({ key: 'categoryPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CategoryPage);
