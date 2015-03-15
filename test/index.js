var chai = require('chai'),
    should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

ValidateArgs = require('../index');

describe('#Validate.isString()', function ()
{
    var validate;

    before(function(done){
        validate = ValidateArgs('test');
        done();
    });

    it('isString("ABC") should not throw', function() {
        expect(function(){
            validate.throwThem().isString('isAString');
        }).not.throw(/Another Error thrown/);
    });
    it('isString(123) should throw', function() {
        expect(function(){
            validate.throwThem().isString(1234);
        }).throw('Value of \'param\' is not a string. value == \'1234\'');
    });

    it('isString("identifier","ABC") Should accept identifier and not throw', function() {
        expect(function(){
            validate.throwThem().isString('identifier','isAString');
        }).not.throw();
    });

    it('isString("identifier",1234) Should accept identifier and throw', function() {
        expect(function(){
            validate.throwThem().isString('identifier',1234);
        }).throw('Value of \'identifier\' is not a string. value == \'1234\'');
    });

});

describe('#Validate.isNumber()', function ()
{
    var validate;

    before(function(done){
        validate = ValidateArgs('test');
        done();
    });

    // Number
    it('isNumber(123) should not throw', function() {
        expect(function(){
            validate.throwThem().isNumber(1234);
        }).not.throw(/Another Error thrown/);
    });
    it('isNumber("ABC") should throw', function() {
        expect(function(){
            validate.throwThem().isNumber('ABC');
        }).throw('Value of \'param\' is not a number. value == \'ABC\'');
    });

    it('isNumber("identifier",1234) Should accept identifier and not throw', function() {
        expect(function(){
            validate.throwThem().isNumber('identifier',1234);
        }).not.throw();
    });

    it('isNumber("identifier","ABC") Should accept identifier and throw', function() {
        expect(function(){
            validate.throwThem().isNumber('identifier',"ABC");
        }).throw('Value of \'identifier\' is not a number. value == \'ABC\'');
    });

});


describe('#Validate.isArray()', function ()
{
    var validate;

    before(function(done){
        validate = ValidateArgs('test');
        done();
    });

    // Number
    it('isArray([]) should not throw', function() {
        expect(function(){
            validate.throwThem().isArray([]);
        }).not.throw(/Another Error thrown/);
    });
    it('isArray("ABC") should throw', function() {
        expect(function(){
            validate.throwThem().isArray('ABC');
        }).throw('Value of \'param\' is not a array. value == \'ABC\'');
    });

    it('isArray("identifier",[]) Should accept identifier and not throw', function() {
        expect(function(){
            validate.throwThem().isArray('identifier',[]);
        }).not.throw();
    });

    it('isArray("identifier","ABC") Should accept identifier and throw', function() {
        expect(function(){
            validate.throwThem().isArray('identifier',"ABC");
        }).throw('Value of \'identifier\' is not a array. value == \'ABC\'');
    });

});


describe('#Validate.isObject()', function ()
{
    var validate;

    before(function(done){
        validate = ValidateArgs('test');
        done();
    });

    // Number
    it('isObject({}) should not throw', function() {
        expect(function(){
            validate.throwThem().isObject({});
        }).not.throw(/Another Error thrown/);
    });
    it('isObject("ABC") should throw', function() {
        expect(function(){
            validate.throwThem().isObject('ABC');
        }).throw('Value of \'param\' is not a object. value == \'ABC\'');
    });

    it('isObject("identifier",{}) Should accept identifier and not throw', function() {
        expect(function(){
            validate.throwThem().isObject('identifier',{});
        }).not.throw();
    });

    it('isObject("identifier","ABC") Should accept identifier and throw', function() {
        expect(function(){
            validate.throwThem().isObject('identifier',"ABC");
        }).throw('Value of \'identifier\' is not a object. value == \'ABC\'');
    });

});


describe('#Validate.isBoolean()', function ()
{
    var validate;

    before(function(done){
        validate = ValidateArgs('test');
        done();
    });

    // Number
    it('isBoolean([]) should not throw', function() {
        expect(function(){
            validate.throwThem().isBoolean(true);
        }).not.throw(/Another Error thrown/);
    });
    it('isBoolean("ABC") should throw', function() {
        expect(function(){
            validate.throwThem().isBoolean('ABC');
        }).throw('Value of \'param\' is not a boolean. value == \'ABC\'');
    });

    it('isBoolean("identifier",[]) Should accept identifier and not throw', function() {
        expect(function(){
            validate.throwThem().isBoolean('identifier',true);
        }).not.throw();
    });

    it('isBoolean("identifier","ABC") Should accept identifier and throw', function() {
        expect(function(){
            validate.throwThem().isBoolean('identifier',"ABC");
        }).throw('Value of \'identifier\' is not a boolean. value == \'ABC\'');
    });

    it('isBoolean(Boolean(true)) should not throw', function() {
        expect(function(){
            validate.throwThem().isBoolean( Boolean(true));
        }).not.throw();
    });

});


describe('#Validate.isFunction()', function ()
{
    var validate,func;

    before(function(done){
        validate = ValidateArgs('test');
        func = function () {};
        done();
    });

    // Number
    it('isFunction(function(){}) should not throw', function() {
        expect(function(){
            validate.throwThem().isFunction(function(){});
        }).not.throw(/Another Error thrown/);
    });
    it('isFunction("ABC") should throw', function() {
        expect(function(){
            validate.throwThem().isFunction('ABC');
        }).throw('Value of \'param\' is not a function. value == \'ABC\'');
    });

    it('isFunction("identifier",[]) Should accept identifier and not throw', function() {
        expect(function(){
            validate.throwThem().isFunction('identifier',function(){});
        }).not.throw();
    });

    it('isFunction("identifier","ABC") Should accept identifier and throw', function() {
        expect(function(){
            validate.throwThem().isFunction('identifier',"ABC");
        }).throw('Value of \'identifier\' is not a function. value == \'ABC\'');
    });


});