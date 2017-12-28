/**
*
* SubNavbar
*
*/

import React from "react";
import { Icon } from "antd";
import Menu from "antd/lib/menu";
const SubMenu = Menu.SubMenu;
import "./sub-navbar.css";

const MenuItemGroup = Menu.ItemGroup;


class SubNavbar extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    current: "mail",
  };

  handleClick(e) {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="sub-navbar-wrap">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">HOME</Menu.Item>
          <SubMenu
            title={
              <span>
                FEATURED <Icon type="down" />
              </span>
            }
          >
            <Menu.Item key="1">Shirts</Menu.Item>
            <Menu.Item key="2">Laptops</Menu.Item>
            <Menu.Item key="3">Samsung</Menu.Item>
            <Menu.Item key="4">Bags</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                SHOP <Icon type="down" />
              </span>
            }
          >
            <Menu.Item key="5">Samsung</Menu.Item>
            <Menu.Item key="6">Safaricom</Menu.Item>
            <Menu.Item key="7">Nokia</Menu.Item>
            <Menu.Item key="8">Xperia</Menu.Item>
          </SubMenu>
          <Menu.Item key="12">BLOG</Menu.Item>
          <Menu.Item key="13">CONTACT</Menu.Item>
        </Menu>
      </div>
    );
  }
}

SubNavbar.propTypes = {};

export default SubNavbar;