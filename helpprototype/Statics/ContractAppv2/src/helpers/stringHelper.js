export function getFirstCharacterFromField(field) {
  if(field.value) {
    return field.value.charAt(0);
  }
  if(field.initial) {
    return field.initial.charAt(0);
  }
  return null;
}
