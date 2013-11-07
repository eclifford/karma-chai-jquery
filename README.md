karma-sinon-chai
================

  * [Chai](http://chaijs.com)
  * [Chai-Jquery](https://github.com/chaijs/chai-jquery)

for [Karma](http://karma-runner.github.io)

Requirements
------------

This Karma plugin requires Karma `~0.10.0`

Special Thanks
------------
This plugin is heavily inspired by [karma-sinon-chai](https://github.com/kmees/karma-sinon-chai) plugin.

Installation
------------

Install the module via npm

```sh
$ npm install --save-dev karma-chai-jquery
```

Add `chai-jquery` to the `frameworks` key in your Karma configuration. Note that this plugin does not add chai for you so it assumes you are already using something like `karma-chai` or `karma-sinon-chai`. Also because of Karma load order being reverse it's important that `chai-jquery` is loaded before `chai` or `sinon-chai` (which loads chai BTW).

```js
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'chai-jquery', 'chai'],
    #...
  });
}
```

Usage
-----

Usage for chai-jquery is fully outlined [here](https://github.com/chaijs/chai-jquery).
