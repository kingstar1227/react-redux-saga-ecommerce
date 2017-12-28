/**
*
* CategoryLink
*
*/

import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// Css
import "./category-link.css";


const photoOne = "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190723/img9_i6yavg.png";
const photoTwo = "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190693/img5_ycfuuj.png";
const photoThree = "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190693/img7_nf3inz.png";
const photoFour = "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190711/img78png_byf8eo.png";
const photoFive = "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190694/img4_sj379h.png";
const photoSix = "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190693/img6_hlfwfn.png";



class CategoryLink extends React.PureComponent {
  render() {
    const { dispatchRoute } = this.props;
    return (
      <div className="category-link-wrap">
        <div style={{backgroundImage: `url(${photoOne})`}}>
          <div className="category-layer"/>
          <div className="category-actions">
            <div>
              <span>Computers & Accessories</span>
              <button onClick={() => dispatchRoute('/category')}>SHOP</button>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: `url(${photoTwo})`}}>
          <div className="category-layer"/>
          <div className="category-actions">
            <div>
              <span>Furniture & Decor</span>
              <button onClick={() => dispatchRoute('/category')}>SHOP</button>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: `url(${photoThree})`}}>
          <div className="category-layer"/>
          <div className="category-actions">
            <div>
              <span>Phone & Accessories</span>
              <button onClick={() => dispatchRoute('/category')}>SHOP</button>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: `url(${photoFour})`}}>
          <div className="category-layer"/>
          <div className="category-actions">
            <div>
              <span>Jewellary & Make up</span>
              <button onClick={() => dispatchRoute('/category')}>SHOP</button>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: `url(${photoFive})`}}>
          <div className="category-layer"/>
          <div className="category-actions">
            <div>
              <span>Travel Accessories</span>
              <button onClick={() => dispatchRoute('/category')}>SHOP</button>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: `url(${photoSix})`}}>
          <div className="category-layer"/>
          <div className="category-actions">
            <div>
              <span>Restaurants</span>
              <button onClick={() => dispatchRoute('/category')}>SHOP</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoryLink.propTypes = {

};

const mapDispatchToProps = dispatch => ({
  dispatchRoute: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(CategoryLink);
