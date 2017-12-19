'use strict';

let chai = require('chai');
let prettifier = require('../lib/numberTruncPrettifier.js');
let testCases = require('./testCases.js').getTruncTestCases();

describe('Number Truncated Prettifier', function(){
    let expect = chai.expect;

    testCases.forEach(testCase => {
      it(testCase[0] + ' should be equal ' + testCase[1], function(){
          let result = prettifier.numberPrettifier(testCase[0]);
          expect(result).to.be.equal(testCase[1]);
      });
    });

});
