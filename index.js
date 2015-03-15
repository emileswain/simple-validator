/**
 * eg.
 * new ValidateArgs('identifier').logThem(true|false).throwThem(true|false).isString('path',path).isNumber('asd').log().throw();
 *
 * Create new validator, pass identifier to track where errors occur.
 * new ValidateArgs('identifier);
 * var validator = new ValidateArgs('identifier);
 *
 * Apply a test.
 *
 * Just test value.
 * validator.isString(value);
 *
 * Test but log param name as well
 * validator.isString('argument name', value);
 *
 * throwThem() is a preHook which when an error is found forces it to be thrown. Should be set before tests. (pass false to disable throws)
 * new ValidateARgs('tests').throwThem().isString('paramName',value);
 *
 * logThem() is a preHook which when an error is found forces it to be logged to the console. Should be set before tests. (pass false to disable logging)
 * new ValidateARgs('tests').logThem().isString('paramName',value);
 *
 * log() is a post hook which will log all errors detected. Call after tests set.
 * new ValidateARgs('tests').isString('paramName',value).log();
 *
 * throw() is a post hook which will throw an error if any test has failed. Call after tests set.
 * new ValidateARgs('tests').isString('paramName',value).throw();
 *
 * @param _name
 * @returns {{logThem: Function, throwThem: Function, isString: Function, isNumber: Function, isBoolean: Function, isArray: Function, throw: Function, log: Function}}
 * @constructor
 */

(function() {
    'use strict';
    var DEBUG = false;
    function Validator(_name){
        var name = _name || 'no name specified';
        !DEBUG ? null: console.log("|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ VALIDATE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        !DEBUG ? null: console.log("| Validating - "+name);
        var failed = false;
        var errors = [];
        var throwErrors = false;
        var logErrors = false;
        var mapArgs = function ()
        {
            // value
            // name, value
            var map = {
                name:'param',
                value:'null',
                type:'null'
            }
            if(arguments.length == 1)
            {
                map.value = arguments[0];

            }else{
                map.name = arguments[0];
                map.value = arguments[1]
            }

            return map;
        }
        var createError = function (d)
        {
            return new Error("Value of '"+ d.name +"' is not a "+ d.type + ". value == '"+ d.value+"'");
        }
        var standardTest = function (d)
        {
            if (typeof d.value != d.type) {
                failed = true;
                processError(createError(d));
            }
        }
        var processError = function (error)
        {
            errors.push(error);
            if(logErrors)
            {
                console.log("ValidateArgs('"+name+"'), " +error.message);
            }
            if(throwErrors == true)
            {
                throw error;
            }
        }
        var me = {
            logThem:function(allow)
            {
                if(allow == false)
                {
                    logErrors = false;
                }else{
                    logErrors = true;
                }
                return me;
            },
            throwThem:function(allow)
            {
                if(allow == false)
                {
                    throwErrors = false;
                }else{
                    throwErrors = true;
                }
                return me;
            },
            isString:function () {
                var d = mapArgs.apply(null,arguments);
                d.type = 'string';
                standardTest(d);
                return me;
            },
            isNumber:function () {
                var d = mapArgs.apply(null,arguments);
                d.type = 'number';
                standardTest(d);
                return me;
            },
            isBoolean:function () {
                var d = mapArgs.apply(null,arguments);
                d.type = 'boolean';
                standardTest(d);
                return me;
            },
            isObject:function () {
                var d = mapArgs.apply(null,arguments);
                d.type = 'object';
                standardTest(d);
                return me;
            },
            isArray:function () {
                var d = mapArgs.apply(null,arguments);
                d.type = 'array';
                if ( !Array.isArray(d.value)) {
                    failed = true;
                    processError(createError(d));
                }
                return me;
            },
            isFunction:function () {
                var d = mapArgs.apply(null,arguments);
                d.type = 'function';
                standardTest(d);
                return me;
            },



            throw:function ()
            {
                if(failed)
                {
                    throw new Error('Method parameters(arguments) failed to validate.');
                }
            },
            log:function ()
            {
                console.log("|~~~~~~~~~~~~~~~~~~~~~~~~~~ Log Error ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("| ValidateArgs('"+name+"') ");
                console.log("|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("|");
                for (var i=0; i<errors.length; i++)
                {
                    console.log('|   ' + errors[i].message);
                }
                console.log("|");
                console.log("|~~~~~~~~~~~~~~~~~~~~~~~~~~~~  END  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                return me;
            }
        }
        return me;
    };

    module.exports = Validator;

})();