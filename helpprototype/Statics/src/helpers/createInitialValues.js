let initialValues = {};

export function createInitialValues(fieldsArray) {
  fieldsArray.map((formField) => {
    initialValues[formField.id] = formField.initialValue;
  });
  return initialValues;
}
