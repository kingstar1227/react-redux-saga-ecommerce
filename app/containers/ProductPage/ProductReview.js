import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export class ProductReview extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="DATA SHEET" key="1">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five
          centuries.
        </TabPane>
        <TabPane tab="REVIEWS" key="2">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five
          centuries.
        </TabPane>
      </Tabs>
    );
  }
}

export default ProductReview;