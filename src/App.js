import Modal from './modal/modal';
import React, { Component } from 'react';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.confirm = this.confirm.bind(this)
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      visible: false
    }
  }

  showModal() {
    this.setState({ visible: true })
  }

  closeModal() {
    console.log('我是onClose回调')
  }

  confirm() {
    console.log('我是confirm回调')
  }

  render() {
    const { visible } = this.state
    return <div className="app">
      <button onClick={this.showModal}>click here</button>
      <Modal
        visible={visible}
        title="这是自定义title"
        confirm={this.confirm}
        onClose={this.closeModal}
      >
        这是自定义content
      </Modal>
    </div>
  }
}
export default App;
