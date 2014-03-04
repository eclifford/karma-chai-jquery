var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.dirname(require.resolve('chai-jquery')) + '/chai-jquery.js'));
  files.unshift(pattern(path.dirname(require.resolve('jquery')) + '/jquery.js'));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-jquery': ['factory', framework]};
