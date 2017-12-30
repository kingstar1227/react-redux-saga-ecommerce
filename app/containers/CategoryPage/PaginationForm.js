import React, { Component } from "react";
import { Cascader } from 'antd';
import Select from "antd/lib/select";

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log("blur");
}

function handleFocus() {
  console.log("focus");
}

function onChange(value) {
  console.log(value);
}

const options = [
  {
    value: 'color',
    label: 'Color',
    children: [
      {
        value: 'pink',
        label: 'Pink',
      },
      {
        value: 'white',
        label: 'White',
      },
    ],
  },
  {
    value: 'size',
    label: 'Size',
    children: [
      {
        value: 9,
        label: '9',
      },
      {
        value: 10,
        label: '10',
      },
      {
        value: 11,
        label: '11',
      },
    ],
  },
];

export class PaginationForm extends Component {
  render() {
    return (
      <div className="filter-form">
        <div>
          <span className="filter-form-title"> Sort by: </span>
          <Cascader
            size="large"
            options={options}
            onChange={onChange}
            placeholder="Please select"
          />
        </div>
        <div>
          <span className="filter-form-title">Show: </span>
          <Select
            size="large"
            showSearch
            style={{ width: 60 }}
            placeholder="12"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="4">4</Option>
            <Option value="8">8</Option>
            <Option value="12">12</Option>
            <Option value="16">16</Option>
            <Option value="20">20</Option>
            <Option value="24">24</Option>
            <Option value="28">28</Option>
            <Option value="32">32</Option>
            <Option value="36">36</Option>
            <Option value="40">40</Option>
          </Select>
        </div>
        <button onClick={this.props.handleDrawer} className="btn-drawer">
          <i className="fa fa-bars drawer-burger" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default PaginationForm;