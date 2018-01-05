import React, { Component } from "react";
import Menu from "antd/lib/menu";
import { Icon } from "antd";

const SubMenu = Menu.SubMenu;

const Products = [
  {
    name: "Watches",
    items: ["apple", "samsung", "lg"],
    icons: "clock-o"
  },
  {
    name: "Clothing",
    items: ["apple", "samsung", "lg"],
    icons: "shopping-bag"
  },
  {
    name: "Electronics",
    items: ["apple", "samsung", "lg"],
    icons: "television"
  },
  {
    name: "Shoes",
    items: ["apple", "samsung", "lg"],
    icons: "tags"
  },
  {
    name: "Jewellery",
    items: ["apple", "samsung", "lg"],
    icons: "diamond"
  },
  {
    name: "Health and Beauty",
    items: ["apple", "samsung", "lg"],
    icons: "shopping-basket"
  },
  {
    name: "Kids and Babies",
    items: ["apple", "samsung", "lg"],
    icons: "shirtsinbulk"
  },
  {
    name: "Sports",
    items: ["apple", "samsung", "lg"],
    icons: "futbol-o"
  },
  {
    name: "Home and furniture",
    items: ["apple", "samsung", "lg"],
    icons: "home"
  }
];

export class Category extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ["0", "1", "2", "3", "4", "5", "6", "7", 8];
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
  render() {
    return (
      <div style={{marginBottom: 32}}>
        <div className="menu-drawer-headers">
          <span className="menu-drawer-title">Categories</span>
        </div>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: "100%" }}
          className="category-side-menu"
        >
          {Products.map((product, index) => (
            <SubMenu
              key={`${index}`}
              title={
                <span className="menu-wrapper">
                  <i className={`fa fa-${product.icons}`} aria-hidden="true" />
                  <span>{product.name}</span>
                </span>
              }
            >
              {product.items.map((value, indexs) => (
                <Menu.Item key={indexs}>{value}</Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
    );
  }
}

export default Category;