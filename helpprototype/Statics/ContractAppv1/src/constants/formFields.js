import * as RENDER_TYPES from './renderTypes';

export const PARTNER_FIELDS = [
  {
    id: 'firstName',
    label: 'Fornavn',
    initialValue: '',
    renderType: RENDER_TYPES.TEXT_FIELD
  },
  {
    id: 'lastName',
    label: 'Etternavn',
    initialValue: '',
    renderType: RENDER_TYPES.TEXT_FIELD
  },
  {
    id: 'personalIdentificationNumber',
    label: 'Personnummer',
    initialValue: '',
    renderType: RENDER_TYPES.TEXT_FIELD
  },
  {
    id: 'address',
    label: 'Adresse',
    initialValue: '',
    renderType: RENDER_TYPES.TEXT_FIELD
  }
];

export const PERSONAL_DEPT_FIELDS = [
  {
    id: 'personalDept',
    label: 'Gjeld',
    initialValue: '',
    renderType: RENDER_TYPES.TEXT_FIELD
  }
];
