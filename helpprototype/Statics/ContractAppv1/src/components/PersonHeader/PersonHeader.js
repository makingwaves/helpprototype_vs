import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class PersonHeader extends Component {
  constructor(props, context) {
    super(props, context);
  }
  static propTypes = {
    personId: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired
  };

  render() {
    const { personId, form } = this.props;
    let title = 'Samboer';
    if(form && form.formData && form.formData[personId]) {
      if(form.formData[personId].firstName && form.formData[personId].firstName.value != '') {
        title = form.formData[personId].firstName.value;
      }
    }
    return (
      <h4 className="Lesser">{ title }</h4>
    )
  }
}

export const PersonHeaderContainer = connect(state => ({
    form: state.form
  })
)(PersonHeader);
