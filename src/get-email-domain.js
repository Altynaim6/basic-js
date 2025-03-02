const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  return email.split('@').pop();
}

module.exports = {
  getEmailDomain
};