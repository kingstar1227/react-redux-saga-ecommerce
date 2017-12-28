/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import { Row, Col } from "antd";

import Slider from "components/Slider";
import SubNavbar from "components/SubNavbar";
import TrendProduct from "components/TrendProduct";

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ position: "relative" }}>
        <SubNavbar />
        <Slider />
        <div className="outer-wrap-grid">
          <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={24} lg={24} xl={20} xxl={18}>
              <TrendProduct />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}