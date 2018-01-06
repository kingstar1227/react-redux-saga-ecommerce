/**
 *
 * CartPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col, Button } from 'antd';

import SubNavbar from 'components/SubNavbar';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCartPage from './selectors';
import reducer from './reducer';
import saga from './saga';


// Css
import './cart-page.css';

const photoOne =
  'http://res.cloudinary.com/dw3arrxnf/image/upload/v1511436729/macbookair_large_and2aa.png';
const photoTwo =
  'http://res.cloudinary.com/dw3arrxnf/image/upload/v1511436730/s8_ffjiys.png';

export class CartPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="wrap-res-nav2">
          <SubNavbar />
        </div>
        <div className="shopping-list-wrap">
          <Row>
            <Col xs={24} sm={24} md={24} xl={22} xxl={20}>
              <div className="shopping-list-title">
                <h3>Your Shopping List</h3>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} xl={22} xxl={20}>
              <ul className="shopping-list-details">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
                <li>Remove</li>
              </ul>
            </Col>
            <Col xs={24} sm={24} md={24} xl={22} xxl={20}>
              <ul className="shopping-list-table">
                <li className="img-row">
                  <span>Product</span>
                  <span>
                    <img src={photoOne} alt="" />
                  </span>{' '}
                  <div>
                    <img src={photoOne} alt="" />
                  </div>
                </li>
                <li>
                  <span>Price</span> <span>KES 22500</span>
                  <div>KES 22500</div>
                </li>
                <li>
                  <span>Quantity</span>{' '}
                  <span>
                    {' '}
                    <input type="number" placeholder="0" min="0" />{' '}
                  </span>
                  <div>
                    <input type="number" />
                  </div>
                </li>
                <li>
                  <span>Total</span> <span>2250</span>
                  <div>2250</div>
                </li>
                <li>
                  <span>Remove</span>{' '}
                  <span>
                    <Button>&times;</Button>
                  </span>
                  <div>
                    <Button>&times;</Button>
                  </div>
                </li>
              </ul>
              <ul className="shopping-list-table">
                <li className="img-row">
                  <span>Product</span>{' '}
                  <span>
                    <img src={photoTwo} alt="" />
                  </span>
                  <div>
                    <img src={photoTwo} alt="" />
                  </div>
                </li>
                <li>
                  <span>Price</span> <span>KES 22500</span>
                  <div>KES 22500</div>
                </li>
                <li>
                  <span>Quantity</span>{' '}
                  <span>
                    {' '}
                    <input type="number" placeholder="0" min="0" />{' '}
                  </span>
                  <div>
                    <input type="number" />
                  </div>
                </li>
                <li>
                  <span>Total</span> <span>2250</span>
                  <div>2250</div>
                </li>
                <li>
                  <span>Remove</span>{' '}
                  <span>
                    <button>&times;</button>
                  </span>
                  <div>
                    <button>&times;</button>
                  </div>
                </li>
              </ul>
              <div className="shopping-list-btn">
                <Button type="secondary" size="large">UPDATE CART</Button>
                <Button type="secondary" size="large">CONTINUE SHOPPING</Button>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} xl={22} xxl={20}>
              <div className="shopping-list-bottom">
                <div>
                  <span>COUPON</span>
                  <span>Enter your coupon code if you have one.</span>
                  <span>
                    <form onSubmit={e => e.preventDefault()}>
                      <input style={{marginBottom: 8}} type="text" placeholder="Enter coupon code" />
                      <Button  type="gold" size="large">Apply coupon</Button>
                    </form>
                  </span>
                </div>
                <div>
                  <span>TOTAL</span>
                  <span>KES 68 000</span>
                  <span>
                    <Button  type="red" size="large">Proceed to checkout</Button>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

CartPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  cartpage: makeSelectCartPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'cartPage', reducer });
const withSaga = injectSaga({ key: 'cartPage', saga });

export default compose(withReducer, withSaga, withConnect)(CartPage);