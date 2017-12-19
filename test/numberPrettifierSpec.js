'use strict';

let chai = require('chai');
let prettifier = require('../lib/numberPrettifier.js');
let testCases = require('./testCases.js').getTestCases();

describe('Number Prettifier', function(){
    let expect = chai.expect;

    testCases.forEach(testCase => {
      it(testCase[0] + ' should be equal ' + testCase[1], function(){
          let result = prettifier.numberPrettifier(testCase[0]);
          expect(result).to.be.equal(testCase[1]);
      });
    });

});
