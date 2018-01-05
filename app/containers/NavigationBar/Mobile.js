/**
 *
 * Mobile component
 *
*/

import React, { PureComponent } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import SearchForm from 'containers/SearchForm';
// Logo
import mboLogo from '!file-loader?name=[mboLogo].[ext]!./images/mboLogo.png';
const SubMenu = Menu.SubMenu;


export class Mobile extends PureComponent {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: []
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  handleNavigation = key => {
    this.mobiRef.style.maxHeight = '0px';
    this.props.dispatchRoute(key);
  };

  toggleMenu = () => {
    if (this.mobiRef.style.maxHeight === '500px') {
      this.mobiRef.style.maxHeight = '0px';
    } else {
      this.mobiRef.style.maxHeight = '500px';
    }
  };

  render() {
    const { dispatchRoute } = this.props;
    return (
      <span className="mobile-nav-display">
        <ul className="mobile-nav-wrapper">
          <li className="nav-item-right nav-logo">
            <button onClick={() => dispatchRoute('/#')}>
              <img src={mboLogo} alt="" />
            </button>
          </li>

          <li className="mobile-nav-toggle">
            <button style={{ height: 85, width: 50 }} onClick={this.toggleMenu}>
              <i className="fa fa-bars fa-2x" aria-hidden="true" />
            </button>
          </li>
        </ul>
        <span className="mobile-nav-bar-wrap" ref={ele => (this.mobiRef = ele)}>
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: '100%' }}
            forceSubMenuRender
            onClick={({ item, key, keyPath }) => this.handleNavigation(key)}
          >
            <Menu.Item key="/">HOME</Menu.Item>
            <SubMenu key="sub1" title="FEATURED ITEMS">
              <Menu.Item key="/category/#1">Shirts</Menu.Item>
              <Menu.Item key="/category/#2">Laptops</Menu.Item>
              <Menu.Item key="/category/#3">Samsung</Menu.Item>
              <Menu.Item key="/category/#4">Bags</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="SHOP">
              <Menu.Item key="/category/#5">Samsung</Menu.Item>
              <Menu.Item key="/category/#6">Safaricom</Menu.Item>
              <Menu.Item key="/category/#7">Nokia</Menu.Item>
              <Menu.Item key="/category/#8">Xperia</Menu.Item>
            </SubMenu>
            <Menu.Item key="/category/">FAVOURITE ITEMS</Menu.Item>
            <Menu.Item key="/products/cart/">SHOPPING CART</Menu.Item>
            <Menu.Item key="/products/checkout/">CHECKOUT</Menu.Item>
            <Menu.Item key="/signin/">SIGN IN</Menu.Item>
            <Menu.Item key="/contact/">CONTACT</Menu.Item>
          </Menu>
        </span>
      </span>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchRoute: route => dispatch(push(route))
});

export default connect(null, mapDispatchToProps)(Mobile);