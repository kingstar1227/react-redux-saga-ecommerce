/**
 *
 * SignupPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { Form, Input, Tooltip, Icon, Checkbox, Button } from "antd";
import "./signup-page.css";

const FormItem = Form.Item;

import injectReducer from "utils/injectReducer";
import makeSelectSignupPage, { makeSelectRegister } from "./selectors";
import reducer from "./reducer";

export class SignupPage extends React.Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
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
    const { autoCompleteResult } = this.state;

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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 24,
          offset: 0
        }
      }
    };

    return (
      <div className="register-wrap">
        <div className="register-header">
          <div className="register-header-one">
            <h1>MBO - Register</h1>
          </div>
          <div className="register-header-two">
            <h2>Shop.Experience.Empower</h2>
          </div>
        </div>
        <div className="register-main">
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  Username&nbsp;
                  <Tooltip title="What do you want other to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator("nickname", {
                rules: [
                  {
                    required: true,
                    message: "Please input your username!",
                    whitespace: true
                  }
                ]
              })(<Input size="large" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="E-mail">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!"
                  }
                ]
              })(<Input size="large" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your password!"
                  },
                  {
                    validator: this.checkConfirm
                  }
                ]
              })(<Input size="large" type="password" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Confirm Password">
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "Please confirm your password!"
                  },
                  {
                    validator: this.checkPassword
                  }
                ]
              })(
                <Input
                  size="large"
                  type="password"
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="register-form-button"
              >
                Register
              </Button>
              Or <Link to="/register">Sign in!</Link>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  signuppage: makeSelectSignupPage(),
  register: makeSelectRegister()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withForm = Form.create();

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: "signupPage", reducer });

export default compose(withReducer, withConnect, withForm)(SignupPage);