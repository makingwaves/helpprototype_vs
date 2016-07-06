import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sticky from 'react-stickynode';

import './FormNavigation.scss';

class HelpFormNavigation extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Sticky enabled={true} bottomBoundary="#FormContainer">
        <div className="FormNavigation">
          <ul>
            <li>
              <a className="active" href="#Partners">Individuelle opplysninger</a>
              <ul>
                <li>
                  <a href="#Partners2">Personopplysninger</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#CommomDepts">Felles opplysninger</a>
              <ul>
                <li>
                  <a href="#CommomDepts2">Personopplysninger</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Sticky>
    )
  }
}

export const HelpFormNavigationContainer = connect(state => ({
    pageHeader: state.pageHeader
  })
)(HelpFormNavigation);

