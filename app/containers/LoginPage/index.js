/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { Form, InputNumber, Input, Icon, Checkbox, Button } from 'antd';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage, { makeSelectLogin } from './selectors';
import reducer from './reducer';
import saga from './saga';

// Css
import './login-page.css';

// Constants
const FormItem = Form.Item;
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

class LoginPage extends React.Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatchRoute('/dashboard');
      }
    });
  };

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrap">
        <div className="login-header">
          <div className="login-header-one">
            <h1>MBO</h1>
          </div>
          <div className="login-header-two">
            <h2>Shop.Experience.Empower</h2>
          </div>
        </div>
        <div className="login-main">
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!'
                  }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    validator: this.checkConfirm
                  }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <Link className="login-form-forgot" to="/forgot-password">
                Forgot password
              </Link>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="login-form-button"
              >
                Sign in
              </Button>
              Or <Link to="/register">register now!</Link>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
  login: makeSelectLogin()
});

const mapDispatchToProps = dispatch => ({
  dispatchRoute: route => dispatch(push(route))
});

const withForm = Form.create();

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(withReducer, withSaga, withConnect, withForm)(LoginPage);