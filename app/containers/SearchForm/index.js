/**
 *
 * SearchForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Icon } from "antd";

import injectReducer from 'utils/injectReducer';
import makeSelectSearchForm from './selectors';
import reducer from './reducer';

// Css
import './search-form.css';

export class SearchForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="search-form-wrap">
        <select defaultValue="all" className="selectz" id="country" name="country">
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="shoes">Shoes</option>
          <option value="jewellery">Jewellery</option>
        </select>
        <input type="text"/>
        <button><Icon type="search" /></button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchform: makeSelectSearchForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchForm', reducer });

export default compose(
  withReducer,
  withConnect,
)(SearchForm);
