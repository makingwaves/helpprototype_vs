import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Document extends Component {
  static propTypes = {
    document: PropTypes.array.isRequired
  };

  render() {
    const { document } = this.props;
    return (
      <div>
        <p>Samboer 1: { document[0].name }</p>
        <p>Samboer 2: { document[1].name }</p>
      </div>
    );
  }
}

export const DocumentContainer = connect(
  state => ({ document: state.document })
)(Document);
