import React, { Component, PropTypes } from 'react';
import { TextInput } from './../../RenderTypes/TextInput/TextInput';
import * as RENDER_TYPES from './../../../constants/renderTypes';

export class FieldRenderer extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    fieldDetails: PropTypes.object.isRequired
  };

  render() {
    const { field, fieldDetails } = this.props;
    switch (fieldDetails.renderType.toLowerCase()) {
      case RENDER_TYPES.TEXT_FIELD.toLowerCase():
        return <TextInput {...field} fieldDetails={fieldDetails} />;
      default:
        return null;
    }
  }
}
