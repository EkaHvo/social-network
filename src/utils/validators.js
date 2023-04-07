export const required = value => (value ? undefined : 'Field is required');

export const alphaNumeric = value =>(value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined);

export const maxLengthCreator = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
