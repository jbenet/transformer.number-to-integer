var Conversion = require('transformer-conversion');
var tNumber = require('transformer.number');
var tInteger = require('transformer.integer');
// require any other modules you may need here.

module.exports = Conversion(tNumber, tInteger, convert);

function convert(num) {
  return Math.round(num);
}
