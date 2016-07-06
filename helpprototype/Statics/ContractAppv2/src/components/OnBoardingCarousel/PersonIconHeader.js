import React, { Component, PropTypes } from 'react';
import { getFirstCharacterFromField } from './../../helpers/stringHelper';
import classNames from 'classnames';
import { connect } from 'react-redux';

import './OnBoardingCarousel.scss';

class PersonIconHeader extends Component {

  static propTypes = {
    form: PropTypes.object.isRequired
  };

  render() {
    const { form } = this.props;
    let letter = '+';
    if(form && form.partners && form.partners.partner2 && form.partners.partner2.name.value) {
      letter = getFirstCharacterFromField(form.partners.partner2.name);
    }
    let hasLetter = letter != '+' && letter != '';
    console.log(hasLetter);
    const classes = classNames('OnBoarding-title OnBoarding-title-slot', { 'OnBoarding-title-slot--filled' : hasLetter });
    return (<h2 className={ classes }><span>{ letter }</span></h2>)
  }
}

export const PersonIconHeaderContainer = connect((state) => ({
  form: state.form
}))(PersonIconHeader);
