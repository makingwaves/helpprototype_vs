import React, { Component, PropTypes } from 'react';
import StepForm from './Form/Form';
import { REALESTATE_FORM } from './../../constants/realestateForm';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static propTypes = {
    params: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  handleSubmit(data) {
    console.log('formData', data);
    this.props.router.push('/main');
  }

  render() {
    const { params } = this.props;
    const fields = REALESTATE_FORM.fields;
    return (
      <StepForm formKey={ params.id } fields={ fields } onSubmit={ this.handleSubmit } />
    )
  }
}

export default FormContainer;
