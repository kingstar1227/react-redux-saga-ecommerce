/**
*
* ProductBanner
*
*/

import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import "./product-banner.css";

const phoneBrandOne =
  "http://res.cloudinary.com/dw3arrxnf/image/upload/v1512031011/brands_hyndwp.png";
const phoneBrandTwo =
  "http://res.cloudinary.com/dw3arrxnf/image/upload/c_scale,w_764/v1514485690/phone1_bcutbh.jpg";

class ProductBanner extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dispatchRoute } = this.props;
    return (
      <div className="phone-banner-wrap">
        <div
          style={{
            backgroundImage: `url(${phoneBrandOne})`,
            backgroundSize: "100% 100%"
          }}
        >
          <a onClick={() => dispatchRoute("/category")} />
        </div>
        <div
          style={{
            backgroundImage: `url(${phoneBrandTwo})`,
            backgroundSize: "100% 100%"
          }}
        >
          <a onClick={() => dispatchRoute("/category")} />
        </div>
      </div>
    );
  }
}

ProductBanner.propTypes = {};

const mapDispatchToProps = dispatch => ({
  dispatchRoute: route => dispatch(push(route))
});

export default connect(null, mapDispatchToProps)(ProductBanner);