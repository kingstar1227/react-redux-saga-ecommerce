/**
*
* ScrollToTop
*
*/

import React, { Component } from 'react';
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    console.log({prevProps})
    console.log({location: this.props.location})
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (<div>{this.props.children}</div>)
  }
}

export default withRouter(ScrollToTop)
