import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { getFirstCharacterFromField } from './../../../helpers/stringHelper';
export const fields = [ 'partner1.name' ];
export const initialValues = {
  'partner1': {
    'name': 'Tiril Storhøi Jensen'
  }
};

class PartnerForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleAddPartnerClick: PropTypes.func.isRequired
  };

  render() {
    const { fields: { partner1 }, handleSubmit, handleAddPartnerClick } = this.props;
    return(
      <form action='POST' onSubmit={handleSubmit}>
        <div className='InputWrap Grid Grid--alignMiddle'>
          <div className='Grid-cell Icon Icon-slot u-sizeFit Colors--teal'><span className='u-inlineBlock'>{ getFirstCharacterFromField(partner1.name) }</span></div>
          <input className='Grid-cell Input u-marginLeft--half u-sizeFill' id={'partner1' + partner1.name} type='text' {...partner1.name} />
        </div>
        <a onClick={ handleAddPartnerClick } className='AddButton InputWrap Grid Grid--alignMiddle'>
          <div className='Grid-cell Icon Icon-slot u-sizeFit'><span className='u-inlineBlock'>+</span></div>
          <div className='u-textLeft u-marginLeft--half u-block u-sizeFill'>
            <span className='AddButton-text u-marginLeft--half'>Legg til samboer</span>
          </div>
        </a>
      </form>
    )
  }
}

export default reduxForm({ form: 'partners', fields: fields, initialValues: initialValues, destroyOnUnmount: false })(PartnerForm);
