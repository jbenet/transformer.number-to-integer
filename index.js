var transformer = require('dat-transformer');
var tNumber = transformer('number');
var tInteger = transformer('integer');
// require any other modules you may need here.

module.exports = transformer.Conversion(tNumber, tInteger, convert);

function convert(num) {
  return Math.round(num);
}
