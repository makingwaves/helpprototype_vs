import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFirstCharacterFromField } from './../../helpers/stringHelper';

import './ContractHeader.scss';

class ContractHeader extends Component {

  static propTypes ={
    form: PropTypes.object.isRequired
  };

  render() {
    const { form } = this.props;
    let partner1;
    let partner2;
    if(form && form.partners && form.partners.partner1 && form.partners.partner1.name) {
      partner1 = getFirstCharacterFromField(form.partners.partner1.name);
    }
    if(form && form.partners && form.partners.partner2 && form.partners.partner2.name) {
      partner2 = getFirstCharacterFromField(form.partners.partner2.name);
    }
     return (
      <div className='ContractHeader Grid Grid--alignMiddle Grid--alignCenter'>
        <div className='Grid-cell u-sizeFull'>
          <div className='ContractHeader-top Grid Grid--alignCenter Grid--alignMiddle'>
            <h1 className='ContractHeader-title'>Samboeravtale</h1>
          </div>
          <div className='ContractHeader-bottom u-textCenter'>
            <p>Legg inn hvem som eier hva og hvordan delingen skal skje om samlivet opphører.</p>
          </div>
          <div className='ContractHeader-controls Grid Grid--withGutter Grid--alignCenter Grid--alignMiddle'>
            <button className='ActionButton u-marginRight u-marginBottom Grid-cell'>Eiendom</button>
            <button className='ActionButton u-marginBottom Grid-cell'>Kjøretøy</button>
            <button className='ActionButton u-marginRight Grid-cell'>Formue og gjeld</button>
            <button className='ActionButton Grid-cell'>Andre eiendeler</button>
          </div>
        </div>
      </div>
    )
  }
}

export const ContractHeaderContainer = connect((state) => ({
  form: state.form
}))(ContractHeader);
