var util = require('util');

module.exports = {
  enabled: true,
  header: function (request) {
    var params = request.auth['basic'];
    if (params) {
      .toString("base64")
      return util.format("{ \"Authorization\" : \"Basic %s\" }", new Buffer(params.username+":"+params.password).toString("base64"))
    }
  }

};
