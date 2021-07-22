export const validateEmail = (myMail) => {
  const mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (myMail === '' || !mailReg.test(String(myMail).toLowerCase())) {
    return false;
  }
  return true;
};

export const ValidateCharacters = (string) => {
  const charReg = /^[A-Za-z ]+$/;
  if (string === '' || !charReg.test(String(string).toLowerCase())) {
    return false;
  }
  return true;
};

export const validateNumbers = (string) => {
  const charReg = /^\d+$/;
  if (string === '' || !charReg.test(String(string).toLowerCase())) {
    return false;
  }
  return true;
};

export const validatePassword = (string) => {
  if (string.length < 8) {
    return 'Minimum 8 characters are required';
  }
  if (string.length > 16) {
    return 'Maximum 16 characters are allowed';
  }
  const charReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (string === '' || !charReg.test(string)) {
    return 'Required 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character';
  }
  return '';
};

export const validateRequireField = (form) => {
  let result = [];
  for (var key in form) {
    if (form[key].hasOwnProperty('error') && form[key].value === '') {
      result.push(key);
    }
  }
  return result;
};

export const resetErrorField = (form) => {
  let result = form;
  for (var key in form) {
    if (result[key].hasOwnProperty('error')) {
      result[key].error = '';
    }
  }
  return result;
};
