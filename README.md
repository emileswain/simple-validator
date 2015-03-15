ValidateArgs
============


Simple validator to test, log and or throw errors.

## Installation

  npm install https://github.com/emileswain/validate-arg-types/tarball/master --save
  

## Usage
```
  var ValidateArgs = require('validate-arg-types');
  
  var validator = ValidateArgs('identifier');
  
  validator.throwThem().isString('isAString');
  
  validator.throwThem(false).isString('isAString').log();
  
  validator.isString('isAString').log().throw();
  
  
  validator.throwThem()
    .isString('a-string-value')
    .isNumber('a-number',1234)
    .isArray('a-array',[]);
```


## Contributing

I'm no javascript expert, writing this was in part a foray into writing an npm module on a whim.

## Thanks to 
https://quickleft.com/blog/creating-and-publishing-a-node-js-module/


## Release History

* 0.1.0 Initial release