const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler.getNum should return a number when input is a whole number", function (done) {
    assert.equal(convertHandler.getNum("100 mi"), 100);
    done();
  });

  test("convertHandler.getNum should return a number when input is a decimal number", function (done) {
    assert.equal(convertHandler.getNum("10.5 mi"), 10.5);
    done();
  });

  test("convertHandler.getNum should return a number when input is a fractional number", function (done) {
    assert.equal(convertHandler.getNum("1/2 mi"), 0.5);
    done();
  });

  test("convertHandler.getNum should return a number when input is a fractional number with a decimal", function (done) {
    assert.equal(convertHandler.getNum("1.5/2 mi"), 0.75);
    done();
  });

  test("convertHandler.getNum should return an error on a double-fraction input", function (done) {
    assert.equal(convertHandler.getNum("3/2/3 mi"), "invalid number");
    done();
  });

  test("convertHandler.getNum should correctly default to a numerical input of 1 when no numerical input is provided", function (done) {
    assert.equal(convertHandler.getNum("mi"), 1);
    done();
  });

  test("convertHandler.getUnit should correctly read each valid input unit", function (done) {
    let input = [
      "lbs",
      "km",
      "GAL",
      "MI",
      "LBS",
      "MI",
      "gal",
      "KG",
      "l",
      "L",
      "KG",
      "km",
    ];

    let output = [
      "lbs",
      "km",
      "gal",
      "mi",
      "lbs",
      "mi",
      "gal",
      "kg",
      "L",
      "L",
      "kg",
      "km",
    ];

    input.forEach(function (elem, i) {
      assert.equal(convertHandler.getUnit(elem), output[i]);
    });
    done();
  });

  test("convertHandler.getUnit should correctly return an error for an invalid input unit", function (done) {
    assert.equal(convertHandler.getUnit("100 min"), "invalid unit");
    done();
  });

  test("convertHandler.getReturnUnit should return the correct return unit for each valid input unit", function (done) {
    let input = ["kg", "l", "km", "gal", "lbs", "mi"];
    let expect = ["lbs", "gal", "mi", "L", "kg", "km"];
    input.forEach(function (ele, i) {
      assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
    });
    done();
  });

  test("convertHandler.spellOutUnit should correctly return the spelled-out string unit for each valid input unit", function (done) {
    let input = ["lbs", "gal", "mi", "km", "L", "kg"];
    let expect = [
      "pounds",
      "gallons",
      "miles",
      "kilometers",
      "liters",
      "kilograms",
    ];
    input.forEach(function (ele, i) {
      assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
    });
    done();
  });

  test("convertHandler.getReturnUnit should correctly convert gal to L", function (done) {
    let inputData = [10, "gal"];
    let expectedOutput = 37.8542;
    assert.approximately(
      convertHandler.convert(inputData[0], inputData[1]),
      expectedOutput,
      0.1
    );
    done();
  });

  test("Verifies if convertHandler.getReturnUnit accurately converts liters to gallons", function (done) {
    let inputData = [10, "L"];
    let expectedOutput = 2.64172;
    assert.approximately(
      convertHandler.convert(inputData[0], inputData[1]),
      expectedOutput,
      0.1
    );
    done();
  });

  test("Verifies if convertHandler.getReturnUnit accurately converts miles to kilometers", function (done) {
    let inputData = [10, "mi"];
    let expectedOutput = 16.09344;
    assert.approximately(
      convertHandler.convert(inputData[0], inputData[1]),
      expectedOutput,
      0.1
    );
    done();
  });

  test("convertHandler.getReturnUnit should correctly convert km to mi", function (done) {
    let inputData = [10, "km"];
    let expectedOutput = 6.21371;
    assert.approximately(
      convertHandler.convert(inputData[0], inputData[1]),
      expectedOutput,
      0.1
    );

    done();
  });

  test("convertHandler should correctly convert lbs to kg", function (done) {
    let inputData = [10, "lbs"];
    let expectedOutput = 4.53592;
    assert.approximately(
      convertHandler.convert(inputData[0], inputData[1]),
      expectedOutput,
      0.1
    );
    done();
  });

  test("convertHandler should correctly convert kg to lbs", function (done) {
    let inputData = [10, "kg"];
    let expectedOutput = 22.04624;
    assert.approximately(
      convertHandler.convert(inputData[0], inputData[1]),
      expectedOutput,
      0.1
    );
    done();
  });
});
