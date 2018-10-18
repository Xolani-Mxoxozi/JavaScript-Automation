//Before and after test


var assert = require('assert');

describe('hooks', function() {

    before(function() {
        console.log("   - I will run once before the tests are run");
    });

    after(function() {
        console.log("   - I will run once after the tests are run");
    });

    it('Test 1', function() {
        var result = 1 - 1;

        assert.equal(result, 0);
    });

    it('Test 2', function() {
        var result = 1 * 1;

        assert.equal(result, 1);
    });

    beforeEach(function() {
        console.log("   - I will run before each test is run");
    });

    afterEach(function() {
        console.log("   - I will run after each test is run");
    });

});