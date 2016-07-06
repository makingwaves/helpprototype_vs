import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router'
import FormContainer from './../../../components/FormContainer/FormContainer'

class FormsView extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  render() {
    const { params, router } = this.props;
    console.log(router);
    return (
      <FormContainer router={ router } params={ params } />
    )
  }
}

export default withRouter(FormsView);
