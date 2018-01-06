/**
   *
   * CategoryPage
   *
   */

import React, { Component } from 'react';
import { Row, Col, Pagination, Icon } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageHero from 'components/PageHero';
import SubNavbar from 'components/SubNavbar';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Category from './Category';
import PopularProducts from './PopularProducts';
import ProductFilters from './ProductFilters';
import ProductAdvert from './ProductAdvert';
import PaginationForm from './PaginationForm';
import ProductsList from './ProductsList';

import makeSelectCategoryPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// Css
import './category-page.css';

export class Desktop extends Component {
  render() {
    return (
      <span className="hide__lg__screen">
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={22} xxl={20}>
            <div className="cats-wapper">
              <div className="cats-wapper-one">
                <Category />
                <PopularProducts />
                <ProductFilters />
                <ProductAdvert />
              </div>
              <div className="cats-wapper-two">
                <PaginationForm />
                <ProductsList />
                <div className="pagination-wrap">
                  <Pagination defaultCurrent={1} total={50} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </span>
    );
  }
}

export class Mobile extends Component {
  toggleClassMenu = () => {
    this.menu.classList.add('menu__animatable');
    this.menu.classList.toggle('menu__visible');
  };

  handleTransitionEnd = () => {
    this.menu.classList.remove('menu__animatable');
  };

  render() {
    return (
      <div>
        <div
          onTransitionEnd={this.handleTransitionEnd}
          className="sidebar__menu"
          ref={ele => (this.menu = ele)}
        >
          <div className="sidebar__main">
            <PaginationForm handleDrawer={this.toggleClassMenu} />
            <ProductsList />
            <div className="pagination-wrap">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
          <div className="sidebar">
            <button
              className="sidebar__close__btn"
              onClick={this.toggleClassMenu}
            >
              <Icon type="close" />
            </button>
            <Category />
            <PopularProducts />
            <ProductFilters />
            <ProductAdvert />
          </div>
        </div>
      </div>
    );
  }
}

export class CategoryPage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <span>
        <div className="wrap-res-nav">
          <SubNavbar />
        </div>
        <PageHero />
        <Desktop />
        <Mobile />
      </span>
    );
  }
}

CategoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  categorypage: makeSelectCategoryPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'categoryPage', reducer });
const withSaga = injectSaga({ key: 'categoryPage', saga });

export default compose(withReducer, withSaga, withConnect)(CategoryPage);