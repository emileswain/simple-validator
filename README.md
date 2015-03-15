ValidateArgs
============


Simple validator to test, log and or throw errors.

## Installation

  npm install https://github.com/emileswain/validate-arg-types/tarball/master --save
  

## Usage

##### New instance
```javascript
  var ValidateArgs = require('validate-arg-types');

  var validator = ValidateArgs('MyMethod');
  
```
  
##### To Throw or not to Throw
Fail fast?, in which case call throwThem first. All tests will throw at the first opportunity.

```javascript

  validator.throwThem().isString('isAString');
  
```

or fail last and once.

```javascript

  validator.throwThem(false).isString('isAString').throw();
  
```

you may want to log all errors detected.
```javascript

  validator.throwThem(false).isString('isAString').log().throw();
  
  validator.isString('isAString').log().throw();
  
```  
  
##### Basic tests
```javascript
  
  validator.throwThem().isString('isAString');
  validator.throwThem().isArray([]);
  validator.throwThem().isObject({});
  validator.throwThem().isNumber(1234);
  validator.throwThem().isFunction(function(){});
  
```  
  
##### Advanced tests.

```javascript
  
  validator.throwThem().isObject({name:'firstname'}).has('name');
  
  
```


## Contributing

I'm no javascript expert, writing this was in part a foray into writing an npm module on a whim.

## Thanks to 
https://quickleft.com/blog/creating-and-publishing-a-node-js-module/

## Pondering

For the purpose of experimentation, how to re-factor to add in <,>,= tests on properties.

## Release History

* 0.1.0 Initial release