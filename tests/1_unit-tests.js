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

  test("convertHandler.getNum should correctly default to a numerical input of 1 when no numerical input is provided", function () {
    assert.equal(convertHandler.getNum("mi"), 1);
  });

  test("convertHandler.getUnit should correctly read each valid input unit", function () {
    assert.equal(convertHandler.getUnit("100 mi"), "mi");
  });

  test("convertHandler.getUnit should correctly return an error for an invalid input unit", function () {
    assert.equal(convertHandler.getUnit("100 min"), "invalid unit");
  });

  test("convertHandler.getReturnUnit should return the correct return unit for each valid input unit", function () {
    assert.equal(convertHandler.getReturnUnit("mi"), "km");
  });

  test("convertHandler.spellOutUnit should correctly return the spelled-out string unit for each valid input unit", function () {
    assert.equal(convertHandler.spellOutUnit("mi"), "miles");
  });

  test("convertHandler.getReturnUnit should correctly convert gal to L", function () {
    assert.equal(convertHandler.getReturnUnit("gal"), "L");
  });

  test("convertHandler.getReturnUnit should correctly convert L to gal", function () {
    assert.equal(convertHandler.getReturnUnit("L"), "gal");
  });

  test("convertHandler.getReturnUnit should correctly convert mi to km", function () {
    assert.equal(convertHandler.getReturnUnit("mi"), "km");
  });

  test("convertHandler.getReturnUnit should correctly convert km to mi", function () {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("convertHandler should correctly convert lbs to kg", function () {
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
  });
  test("convertHandler should correctly convert kg to lbs", function () {
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
  });
});
