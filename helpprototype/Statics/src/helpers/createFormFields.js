let formFields = [];

export function createFormFields(fieldsArray) {
  fieldsArray.map((formField) => {
    formFields.push(formField.id)
  });
  return formFields;
}
