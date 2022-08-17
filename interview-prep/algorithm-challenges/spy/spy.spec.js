// to run the test against spy.js in the same folder:
// npm install -g mocha
// mocha spy.spec.js

var spyOn = require('./spy');
var assert = require('assert');

describe('spyOn', function () {

    it('should be a function', function () {
        assert(typeof spyOn === 'function', 'spyOn is not a function.');
    });

    describe('functionality', function () {

        var add = function (x, y) { return x + y; };
        var spyFn;

        beforeEach(function () {
            spyFn = spyOn(add);
        });

        it('should return a function', function () {
            assert(typeof spyFn === 'function', 'Return is not a function.');
        });

        describe('callCount', function () {

            it('should expose getCallCount function', function () {
               assert(typeof spyFn.getCallCount === 'function', 'getCallCount is not a function.');
            });

            it('should accurately record the callCount', function () {
                assert(spyFn.getCallCount() === 0, 'getCallCount() should be equal to 0');
                spyFn(2,2);
                spyFn(2,2);
                assert(spyFn.getCallCount() === 2, 'getCallCount() should be equal to 2');
                spyFn(2,2);
                spyFn(2,2);
                spyFn(2,2);
                assert(spyFn.getCallCount() === 5, 'getCallCount() should be equal to 5');
            });

        });

        describe('wasCalledWith', function () {

            it('should expose wasCalledWith function', function () {
                assert(typeof spyFn.wasCalledWith === 'function', 'wasCalledWith is not a function.');
            });

            it('should return accurate results for called with arguments', function () {
                var o = {};
                spyFn(2, 3);
                assert(spyFn.wasCalledWith(2), 'spyFn was called with 2');
                assert(!spyFn.wasCalledWith(4), 'spyFn was not called with 4');
                spyFn(o);
                assert(spyFn.wasCalledWith(o), 'spyFn was called with referenced object');
            });

        });

        describe('returned', function () {

            it('should expose returned function', function () {
                assert(typeof spyFn.returned === 'function', 'returned is not a function.');
            });

            it('should return accurate results for return values', function () {
                spyFn(2, 3);
                spyFn(5, 5);
                assert(spyFn.returned(5), 'spyFn returned with 5');
                assert(!spyFn.returned(4), 'spyFn did not return 4');
                assert(spyFn.returned(10), 'spyFn did not return 4');
                assert(!spyFn.returned({}), 'spyFn did not return this object');
            });

        });

    });

});
