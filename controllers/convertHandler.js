// Two helpers functions:
function regexSplit(input) {
  let number = input.match(/[.\d\/]+/g || ["1"]);
  let string = input.match(/[a-zA-Z]+/g)[0];
  return [number[0], string];
}

function onlyOneDiv(input) {
  let fractionParts = input.split("/");
  if (fractionParts.length > 2) {
    return false;
  }
  return fractionParts;
}

function ConvertHandler() {
  this.getNum = function (input) {
    let result = regexSplit(input)[0];
    let fractionArray = onlyOneDiv(result);

    if (
      !fractionArray ||
      isNaN(parseFloat(fractionArray[0])) ||
      isNaN(parseFloat(fractionArray[1] || "1"))
    ) {
      return undefined;
    }

    return parseFloat(fractionArray[0]) / parseFloat(fractionArray[1] || "1");
  };

  this.getUnit = function (input) {
    const result = regexSplit(input)[1]?.toLowerCase();
    console.log(result);
    switch (result) {
      case "km":
      case "gal":
      case "lbs":
      case "mi":
      case "kg":
        return result;
      case "l":
        return "L";
      default:
        return undefined;
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
