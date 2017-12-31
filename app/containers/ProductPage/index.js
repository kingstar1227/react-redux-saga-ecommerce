/**
 *
 * ProductPage
 *
 */

import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageHero from 'components/PageHero';
import SubNavbar from 'components/SubNavbar';

import ProductImage from './ProductImage';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// Css
import './product-page.css';

export class ProductPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <SubNavbar />
        <PageHero />
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={22} xxl={18}>
            <Row type="flex" justify="center">
              <Col xs={24} sm={12} md={12} lg={10} xl={8} xxl={6}>
                <ProductImage />
              </Col>
              <Col xs={24} sm={12} md={12} lg={14} xl={16} xxl={18}>
                <h1>B</h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

ProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  productpage: makeSelectProductPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'productPage', reducer });
const withSaga = injectSaga({ key: 'productPage', saga });

export default compose(withReducer, withSaga, withConnect)(ProductPage);