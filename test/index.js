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