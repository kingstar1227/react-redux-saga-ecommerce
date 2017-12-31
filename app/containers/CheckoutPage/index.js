/**
 *
 * CheckoutPage
 *
 */

import React from 'react';
import Form from 'antd/lib/form';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import { Button, Radio, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SubNavbar from 'components/SubNavbar';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCheckoutPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// Css
import './checkout-page.css';

const Textarea = Input.TextArea;
const FormItem = Form.Item;
const { Option } =  Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
};

function handleChange(value) {
  console.log(`selected ${value}`);
}

export class CheckoutPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const buttonItemLayout = null;
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <div className="wrap-res-nav2">
          <SubNavbar />
        </div>
        <div className="checkout-page-wrap">
          <div className="checkout-mini-wrap">
            <span className="checkout-table-tile">BILLING DETAILS</span>
            <div className="pd-20">
              <div className="checkout-form-wrap">
                <Form layout="vertical">
                  <div className="checkout-input-wrap">
                    <FormItem {...formItemLayout} label="Country">
                      <Select
                        defaultValue="Kenya"
                        style={{ width: '100%' }}
                        dropdownClassName="kuma-select2-selected-has-icon"
                      >
                        <Option value="Kenya">Kenya</Option>
                        <Option value="Uganda">Uganda</Option>
                        <Option value="Tanzania">Tanzania</Option>
                      </Select>
                    </FormItem>
                  </div>

                  <span>
                    <FormItem {...formItemLayout} label="First Name">
                      {getFieldDecorator('firstName', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your first name!'
                          }
                        ]
                      })(<Input type="text" placeholder="First Name" />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="Last Name">
                      {getFieldDecorator('lastName', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your last name!'
                          }
                        ]
                      })(<Input type="text" placeholder="Last Name" />)}
                    </FormItem>
                  </span>

                  <span>
                    <FormItem {...formItemLayout} label="Email">
                      {getFieldDecorator('email', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your email!'
                          }
                        ]
                      })(<Input type="email" placeholder="Email" />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="Phone number">
                      {getFieldDecorator('phoneNumber', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your phone number!'
                          }
                        ]
                      })(<Input type="tel" placeholder="Phone number" />)}
                    </FormItem>
                  </span>

                  <span>
                    <FormItem {...formItemLayout} label="Address">
                      {getFieldDecorator('address', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your address!'
                          }
                        ]
                      })(<Input type="text" placeholder="Address" />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="Address 2">
                      {getFieldDecorator('address2', {
                        rules: [
                          {
                            required: false,
                            message: 'Please input your Address 2!'
                          }
                        ]
                      })(
                        <Input
                          type="text"
                          placeholder="Apartment, suite, unit e.t.c (optional)"
                        />
                      )}
                    </FormItem>
                  </span>

                  <span>
                    <FormItem {...formItemLayout} label="County">
                      {getFieldDecorator('county', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your county!'
                          }
                        ]
                      })(<Input type="text" placeholder="County" />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="Postal/Zip">
                      {getFieldDecorator('postal', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your postal/zip!'
                          }
                        ]
                      })(<Input type="text" placeholder="Postal/Zip" />)}
                    </FormItem>
                  </span>

                  <div>
                    <FormItem>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                      })(<Checkbox>Save my detail</Checkbox>)}
                    </FormItem>
                  </div>

                  <FormItem {...formItemLayout} label="Order note">
                    {getFieldDecorator('orderNote', {
                      rules: [
                        {
                          required: false,
                          message: 'Please input your postal/zip!'
                        }
                      ]
                    })(<Textarea type="text" placeholder="Order note..." />)}
                  </FormItem>

                  <FormItem>
                    <Button type="primary" size="large">Submit</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>

          <div className="checkout-page-total">
            <span className="checkout-table-tile">YOUR ORDER</span>
            <div className="pd-20">
              <ul>
                <li>
                  <span>PRODUCT</span>
                  <span>TOTAL</span>
                </li>
                <li>
                  <span>Samsung Mobile phone JS 3310 X2</span>
                  <span>KES 22500</span>
                </li>
                <li>
                  <span>Samsung Mobile phone JS 3310 X2</span>
                  <span>KES 22500</span>
                </li>
                <li>
                  <span>ORDER TOTAL</span>
                  <span>KES 22500</span>
                </li>
              </ul>
              <div className="payments-methods">
                <img
                  src="http://res.cloudinary.com/dw3arrxnf/image/upload/v1511456164/payments_jwi907.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  checkoutpage: makeSelectCheckoutPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withForm = Form.create();
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'checkoutPage', reducer });
const withSaga = injectSaga({ key: 'checkoutPage', saga });

export default compose(withReducer, withSaga, withConnect, withForm)(
  CheckoutPage
);