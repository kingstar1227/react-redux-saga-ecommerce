/**
 *
 * CategoryPage
 *
 */

import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SubNavbar from 'components/SubNavbar';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import PageHero from './PageHero';
import Category from './Category';
import PopularProducts from './PopularProducts';

import makeSelectCategoryPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// Css
import './category-page.css';

export class CategoryPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="wrap-res-nav">
          <SubNavbar />
        </div>
        <PageHero />
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={22} xxl={20}>
            <Category />
            <PopularProducts />
          </Col>
        </Row>
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

export default compose(withReducer, withSaga, withConnect)(CategoryPage);
