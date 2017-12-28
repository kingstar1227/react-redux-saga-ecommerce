/**
*
* Slider
*
*/

import React from "react";

import { Carousel } from "antd";

// Css
import "./slider.css";

class Slider extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Carousel vertical autoplay easing="ease-in-out">
        <div>
          <img
            src="http://res.cloudinary.com/dw3arrxnf/image/upload/v1511184460/banner1_wgw1j4.png"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="http://res.cloudinary.com/dw3arrxnf/image/upload/v1514439420/iphone_vshgh9.jpg"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="http://res.cloudinary.com/dw3arrxnf/image/upload/v1514439423/jordan_ywovwk.jpg"
            style={{ width: "100%" }}
          />
        </div>
      </Carousel>
    );
  }
}

Slider.propTypes = {};

export default Slider;