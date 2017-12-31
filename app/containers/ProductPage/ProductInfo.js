import React, { Component } from 'react';
import { Rate, Button } from 'antd';
import Select from 'antd/lib/select';
import { connect } from "react-redux";
import { push } from "react-router-redux";

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export class ProductInfo extends Component {
  render() {
    const { dispatchRoute } = this.props;
    return (
      <div className="product-info-wrap">
        <header className="product-page-title">Laoreet Congue</header>
        <div className="product-page-metas">
          <div>
            <span>Reference:</span> 011DSO1
          </div>
          <div>
            <span>Condition:</span> New product
          </div>
          <div>
            <span className="product-current-price">KES 2500</span> was{' '}
            <strike>KES 3000</strike>
          </div>
        </div>
        <div className="rate-demo-wrp">
          <Rate disabled defaultValue={4} />
        </div>
        <div className="product-current-descptn">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="product-refinement-form">
          <div>
            <span className="product-refinement-title">Quantity</span>
            <Select
              defaultValue="1"
              style={{ width: 100 }}
              onChange={handleChange}
              size="large"
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
          <div>
            <span className="product-refinement-title">Size</span>
            <Select
              defaultValue="12"
              style={{ width: 100 }}
              onChange={handleChange}
              size="large"
            >
              <Option value="9">13</Option>
              <Option value="10">12</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </Select>
          </div>
          <div className="">
            <Button type="secondary" size="large" onClick={() => dispatchRoute('/product/checkout/')}>
              ADD TO CART
            </Button>
          </div>
        </div>
        <div className="product-share-icons">
          <header>Share or send to friend</header>
          <div>
            <button>
              <i className="fa fa-twitter" aria-hidden="true" />
            </button>
            <button>
              <i className="fa fa-facebook-f" aria-hidden="true" />
            </button>
            <button>
              <i className="fa fa-envelope-o" aria-hidden="true" />
            </button>
            <button>
              <i className="fa fa-whatsapp" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchRoute: route => dispatch(push(route))
});

export default connect(null, mapDispatchToProps)(ProductInfo);