import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { getFirstCharacterFromField } from './../../../helpers/stringHelper';
export const fields = [ 'partner2.name', 'partner2.personalId' ];

class Partner2Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { fields: { partner2 }, handleSubmit } = this.props;
    return(
      <form action='POST' onSubmit={handleSubmit}>
        <div className='InputWrap Grid Grid--alignCenter'>
          <input className='Grid-cell Input Input--hasIcon u-sizeFill' id={'partner2' + partner2.name} type='text' {...partner2.name} placeholder='Navn' />
        </div>
        <div className='InputWrap Grid Grid--alignCenter'>
          <input className='Grid-cell Input Input--hasIcon u-sizeFill' id={'partner2' + partner2.personalId} type='text' {...partner2.personalId} placeholder='Personnummer' />
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'partners', fields: fields, destroyOnUnmount: false })(Partner2Form);
