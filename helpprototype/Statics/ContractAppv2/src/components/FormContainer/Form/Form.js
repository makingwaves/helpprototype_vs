import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import './Form.scss';

class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { fields: { realestate }, handleSubmit } = this.props;
    return(
      <form action='POST' onSubmit={handleSubmit}>
        {realestate.map((estate, index) => <div key={ index }>
          <h3>Eiendom { index }</h3>
          <div className='InputWrap'>
            <label for={'estateName_' + index}>Adresse</label>
            <input id={'estateName_' + index} type='text' {...estate.name} />
          </div>
          <div className='InputWrap'>
            <label for={'estateDesc_' + index}>Beskrivelse</label>
            <input id={'estateDesc_' + index} type='text' {...estate.description} />
          </div>
        </div>)}

        <button type="button" onClick={() => {
            realestate.addField();    // pushes empty child field onto the end of the array
          }}><i/> Legg til eiendom
        </button>

        <input type='submit' value='Ferdig' />
      </form>
    )
  }
}

export default reduxForm({ form: 'stepData', destroyOnUnmount: false })(Form);
