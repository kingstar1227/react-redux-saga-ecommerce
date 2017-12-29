/**
 *
 * PageHero
 *
 */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

// Routes name and value
const breadcrumbNameMap = {
  '/': 'Home',
  '/category': 'Shop',
};

class PageHero extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
      <div className="category-bd-crumbs">
        <div className="category-bd-layer" />
        <div className="crumb-wrap">
          <Breadcrumb separator="&#62;">{breadcrumbItems}</Breadcrumb>
        </div>
      </div>
    );
  }
}

PageHero.propTypes = {};

export default withRouter(PageHero);
