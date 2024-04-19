// const text = 'hey';

const repeatString = function (text, num) {
  let new_text = '';
  let error = "ERROR";
  if (num < 0) {
    return error;
  }
  for (let i = 0; i < num; i++) {

    new_text = new_text + text;
  }
  return new_text;
};

// Do not edit below this line
module.exports = repeatString;
