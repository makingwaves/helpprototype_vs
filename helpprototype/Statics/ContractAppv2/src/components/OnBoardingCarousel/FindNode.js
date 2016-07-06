import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class FindNode extends Component {

  componentDidMount() {
    const featuredWays = ReactDom.findDOMNode(this.refs.featuredWays);
  }

  render() {
    return (<p>test</p>);
  }
}
