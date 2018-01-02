/**
 *
 * Account
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Card, Row, Col, Input, Icon, Button, Table, Avatar } from 'antd';
import Form from 'antd/lib/form';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAccount from './selectors';
import reducer from './reducer';
import saga from './saga';

// Css
import './account.css';

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

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>
  },
  {
    title: 'Item Price',
    className: 'column-money',
    dataIndex: 'money'
  },
  {
    title: 'Date',
    dataIndex: 'date'
  }
];

const data = [
  {
    key: '1',
    name: 'Samsung Tv',
    money: 'Ksh. 30,000.00',
    date: '01/10/2017'
  },
  {
    key: '2',
    name: 'Hp Laptop',
    money: 'Ksh. 125, 600.00',
    date: '20/10/2017'
  },
  {
    key: '3',
    name: 'Polo t-shirt',
    money: 'Ksh. 1200.00',
    date: '21/12/2017'
  }
];

export class Account extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //     this.props.dispatchRoute('/dashboard');
    //   }
    // });
  };

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    return (
      <div className="accnt-wrap">
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={20} xxl={18}>
            <Row>
              <Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
                <div className="avatar-wrap">
                  <Card hoverable title={<Avatar size="large" icon="user" />}>
                    First name Last name
                  </Card>
                </div>
              </Col>
              <div className="account-wrap">
                <Col xs={24} sm={24} md={16} lg={18} xl={18} xxl={18}>
                  <Card hoverable title="Previous Transactions">
                    <Table columns={columns} dataSource={data} bordered={false} />
                  </Card>
                  <Card hoverable title="Profile">
                    <Form onSubmit={this.handleSubmit}>
                      <FormItem label="Name">
                        <Input
                          prefix={
                            <Icon type="user" style={{ color: '#dbdbdb' }} />
                          }
                          placeholder="Name"
                        />
                      </FormItem>
                      <FormItem label="Email">
                        <Input
                          prefix={
                            <Icon type="mail" style={{ color: '#dbdbdb' }} />
                          }
                          placeholder="Email"
                        />
                      </FormItem>
                      <FormItem label="Phone number">
                        <Input
                          type="tel"
                          prefix={
                            <Icon type="mobile" style={{ color: '#dbdbdb' }} />
                          }
                          placeholder="Phone number"
                        />
                      </FormItem>
                      <FormItem>
                        <Button
                          type="secondary"
                          htmlType="submit"
                          className="login-form-button"
                        >
                          Update Profile
                        </Button>
                      </FormItem>
                    </Form>
                  </Card>
                  <Card hoverable title="Update Password">
                    <Form onSubmit={this.handleSubmit}>
                      <FormItem label="Current password">
                        <Input
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                          }
                          type="password"
                          placeholder="Current password"
                        />
                      </FormItem>
                      <FormItem label="New password">
                        <Input
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                          }
                          type="password"
                          placeholder="New password"
                        />
                      </FormItem>
                      <FormItem label="Verify password">
                        <Input
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                          }
                          type="password"
                          placeholder="Verify password"
                        />
                      </FormItem>
                      <FormItem>
                        <Button
                          type="secondary"
                          htmlType="submit"
                          className="login-form-button"
                        >
                          Update Password
                        </Button>
                      </FormItem>
                    </Form>
                  </Card>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

Account.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'account', reducer });
const withSaga = injectSaga({ key: 'account', saga });

export default compose(withReducer, withSaga, withConnect)(Account);