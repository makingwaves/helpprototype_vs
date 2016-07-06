import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HelpSticky from './../HelpSticky/HelpSticky';
import { StickyContainer, Sticky } from 'react-sticky';
import { changeDocument } from './../../redux/modules/document';
import DynamicForm from './HelpFormRedux';
import { PersonHeaderContainer } from './../../components/PersonHeader/PersonHeader';
import { PARTNER_1_FORM } from './../../constants/partner1Form';
import { PARTNER_2_FORM } from './../../constants/partner2Form';
import { createFormFields } from './../../helpers/createFormFields';
import { createInitialValues } from './../../helpers/createInitialValues';

import TextField from 'material-ui/TextField';

import './HelpForm.scss';

const partner1Fields = createFormFields(PARTNER_1_FORM.fields);
const partner1InitialValues = createInitialValues(PARTNER_1_FORM.fields);
const partner2Fields = createFormFields(PARTNER_2_FORM.fields);
const partner2InitialValues = createInitialValues(PARTNER_2_FORM.fields);

export class HelpForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStateChangePartner = this.handleStateChangePartner.bind(this);
    this.handleStateChangeCommonDepts = this.handleStateChangeCommonDepts.bind(this);
    this.onStickyStateChange = this.onStickyStateChange.bind(this);
  }

  handleSubmit(data) {
    console.log("FormSubmit", data);
  }
  onStickyStateChange(stickyRef, isSticky) {
    console.log('sticky: ', stickyRef, isSticky)
  }

  handleStateChangePartner = (status) => {
    if (status.status === HelpSticky.STATUS_RELEASED) {
      $('#Partners_Sticky').addClass('active');
    }
    if (status.status === HelpSticky.STATUS_FIXED) {
      $('#Partners_Sticky').addClass('active');
      $('#Partners_Sticky').next('.FormContainer').addClass('stickyActive');
    }
    if (status.status === HelpSticky.STATUS_ORIGINAL) {
      $('#Partners_Sticky').removeClass('active');
    }
  };
  handleStateChangeCommonDepts = (status) => {
    if (status.status === HelpSticky.STATUS_RELEASED) {
      $('#CommomDepts_Sticky').addClass('active');
    }
    if (status.status === HelpSticky.STATUS_FIXED) {
      $('#CommomDepts_Sticky').addClass('active');
    }
    if (status.status === HelpSticky.STATUS_ORIGINAL) {
      $('#CommomDepts_Sticky').removeClass('active');
    }
  };

  render() {
    return (
      <div id="HelpForm" className="HelpForm Grid">
        <StickyContainer id="Partners" className="Chapter Grid-cell u-sizefull" data-chapter-title="Individuelle opplysninger" data-chapter-id="Partners">
          <Sticky stickyClassName="StickyBar" bottomOffset={-30} onStickyStateChange={ this.onStickyStateChange }>
            <header>
              <div className="HelpForm-section u-sizefull">
                <h2 className="active">Individuelle opplysninger</h2>
              </div>
            </header>
          </Sticky>
          <div className="InnerContainer FormContainer Grid-cell u-sizeFull">
            <p className="Ingress">Lead - Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.</p>
            <h4>Personopplysninger</h4>
          </div>
          <div className="InnerContainer FormContainer Grid Grid--withGutter">
            <div className="Grid-cell u-sm-sizeFull u-md-size1of2 u-lg-size1of2">
              <PersonHeaderContainer personId={ PARTNER_1_FORM.formId } />
            </div>
            <div className="Grid-cell u-sm-sizeFull u-md-size1of2 u-lg-size1of2">
              <PersonHeaderContainer personId={ PARTNER_2_FORM.formId } />
            </div>
          </div>
          <div className="InnerContainer FormContainer Grid Grid--withGutter">
            <DynamicForm
              currentForm={ PARTNER_1_FORM }
              gridSize="u-sm-sizeFull u-md-size1of2 u-lg-size1of2"
              formKey={ PARTNER_1_FORM.formId }
              fields={ partner1Fields }
              initialValues={ partner1InitialValues }
              onSubmit={ this.handleSubmit } />

            <DynamicForm
              currentForm={ PARTNER_2_FORM }
              gridSize="u-sm-sizeFull u-md-size1of2 u-lg-size1of2"
              formKey={ PARTNER_2_FORM.formId }
              fields={ partner2Fields }
              initialValues={ partner2InitialValues }
              onSubmit={ this.handleSubmit } />
          </div>
        </StickyContainer>
        <StickyContainer id="CommomDepts" className="Chapter Grid-cell u-sizefull" data-chapter-title="Felles opplysninger" data-chapter-id="CommomDepts">
          <Sticky stickyClassName="StickyBar" onStickyStateChange={ this.onStickyStateChange }>
            <div className="HelpForm-section u-sizefull">
              <h2>Felles opplysninger</h2>
            </div>
          </Sticky>
          <div className="FormContainer Grid-cell u-sizeFull">
            <p className="Ingress">Lead - Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.</p>
            <h4>Personopplysninger</h4>
          </div>
          <div className="FormContainer Grid Grid--withGutter">
            <DynamicForm
              currentForm={ PARTNER_2_FORM }
              gridSize="u-sizefull"
              formKey={ PARTNER_2_FORM.formId }
              fields={ partner2Fields }
              initialValues={ partner2InitialValues }
              onSubmit={ this.handleSubmit } />
          </div>
        </StickyContainer>
      </div>
    )
  }
}
