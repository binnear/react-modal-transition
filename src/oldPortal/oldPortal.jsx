import React from 'react';
import ReactDOM from 'react-dom';

class OldPortal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { visible } = this.props
    if (visible) {
      this.renderPortal(this.props);
    }
  }

  componentWillReceiveProps(props) {
    if (props.visible) {
      this.renderPortal(props)
    } else {
      this.closePortal()
    }
  }

  closePortal() {
    if (this.node) {
      ReactDOM.unmountComponentAtNode(this.node)
      document.body.removeChild(this.node)
    }
  }

  renderPortal(props) {
    if (!this.node) {
      this.node = document.createElement('div');
    }
    document.body.appendChild(this.node);
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      props.children,
      this.node,
    );
  }

  render() {
    return null;
  }
}

export default OldPortal