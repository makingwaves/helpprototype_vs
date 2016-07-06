import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './Text.scss';

export class TextInput extends Component {
  static propTypes = {
    value: PropTypes.any,
    initialValue: PropTypes.any,
    name: PropTypes.string.isRequired,
    invalid: PropTypes.bool,
    error: PropTypes.string,
    fieldDetails: PropTypes.object.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return this.props.value !== nextProps.value;
  }

  render () {
    const { name, invalid, error, fieldDetails, ...field } = this.props;
    const fieldId = name + '_text';
    const fieldLabel = fieldDetails.label;
    const formGroupClasses = classNames('Help-FormGroup u-flex u-flexAlignItemsCenter', { 'is-invalid': invalid });
    return (
      <div className={formGroupClasses}>
        <label className='Help-Label u-md-size5of12 u-lg-size4of12' htmlFor={fieldId}>{fieldLabel}</label>
        <input
          id={fieldId}
          type='text'
          {...field}
          className='Help-Text u-md-size7of12 u-lg-size8of12'
          placeholder={fieldLabel} />
        {invalid && error && <span className='help-block validation-message'>{error}</span>}
      </div>
    );
  }
}
