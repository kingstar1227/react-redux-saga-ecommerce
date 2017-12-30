import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const photoOne =
  'http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190702/img1_fs9jmo.png';

export class ProductAdvert extends Component {
  render() {
    const { dispatchRoute } = this.props;
    return (
      <div
        className="product-advert-wrap"
        style={{ backgroundImage: `url(${photoOne})`, backgroundSize: 'cover' }}
      >
        <div className="product-advert-title-wrap">
          <span>WOMEN'S</span>
          <span>UP TO 20% OFF</span>
        </div>
        <div className="product-advert-btn-wrap">
          <button onClick={() => dispatchRoute('/product')}>Shop Now</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchRoute: (route) => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(ProductAdvert);
