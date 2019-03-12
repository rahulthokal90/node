const config = require('config');

module.exports = function() {
 // console.log(config.get('privateKey'));
  if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }
}