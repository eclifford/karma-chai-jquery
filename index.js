var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.resolve(require.resolve('chai-jquery'))));
  files.unshift(pattern(path.join(__dirname, 'bower_components/jquery/jquery.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-jquery': ['factory', framework]};
