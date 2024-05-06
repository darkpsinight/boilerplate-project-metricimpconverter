const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler.getNum should return a number when input is a whole number", function () {
    assert.equal(convertHandler.getNum("100 mi"), 100); // Testing with a whole number input
  });

  test("convertHandler.getNum should return a number when input is a decimal number", function () {
    assert.equal(convertHandler.getNum("10.5 mi"), 10.5); // Testing with a decimal number input
  });

  test("convertHandler.getNum should return a number when input is a fractional number", function () {
    assert.equal(convertHandler.getNum("1/2 mi"), 0.5); // Testing with a fractional number input
  });

  test("convertHandler.getNum should return a number when input is a fractional number with a decimal", function () {
    assert.equal(convertHandler.getNum("1.5/2 mi"), 0.75); // Testing with a fractional number input with a decimal
  });

  test("convertHandler.getNum should return an error on a double-fraction input", function () {
    assert.equal(convertHandler.getNum("3/2/3 mi"), "invalid number");
  });
});
