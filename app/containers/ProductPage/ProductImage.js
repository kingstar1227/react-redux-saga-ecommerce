import React, { PureComponent } from 'react';
import { Modal } from 'antd';

import { connect } from 'react-redux';
const mainPhoto =
  'http://res.cloudinary.com/dw3arrxnf/image/upload/v1511977487/product-5_xobmrk.jpg';

export class ProductImage extends PureComponent {
  state = {
    openModal: false
  };

  handleModal = openModal => this.setState({ openModal });

  render() {
    return (
      <div className="product-page-img-div">
        <div
          className="product-page-img-wrap"
          style={{
            backgroundImage: `url(${mainPhoto})`,
            backgroundSize: 'cover'
          }}
        >
          <button
            onClick={() => this.handleModal(true)}
            className="product-page-img-btn"
          >
            View larger{' '}
            <span className="product-page-img-icon">
              <i className="fa fa-arrows-alt" aria-hidden="true" />
            </span>
          </button>
        </div>
        <Modal
          wrapClassName="vertical-center-modal"
          visible={this.state.openModal}
          onCancel={() => this.handleModal(false)}
          footer={null}
        >
          <img src={mainPhoto} alt="product image" />
        </Modal>
      </div>
    );
  }
}

export default ProductImage;