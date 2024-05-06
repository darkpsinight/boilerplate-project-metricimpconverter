// Two helpers functions:
function regexSplit(input) {
  const matches = input.match(/([.\d\/]+)|([a-zA-Z]+)/g);

  const number = matches
    ? matches.find((match) => /[.\d\/]+/.test(match))
    : "1";
  const string = matches
    ? matches.find((match) => /[a-zA-Z]+/.test(match))
    : "";

  return [number, string];
}

function onlyOneDiv(input) {
  let fractionParts = input.split("/");
  if (fractionParts.length > 2) {
    return false;
  }
  return fractionParts;
}

// main function
function ConvertHandler() {
  this.getNum = function (input) {
    const number = regexSplit(input)[0] || "1"; // if nothing is provided it will default to 1.

    const fractionArray = onlyOneDiv(number);

    if (isNaN(parseFloat(fractionArray[0])) || isNaN(parseFloat(fractionArray[1] || "1"))) {
      return "invalid number";
    }

    return parseFloat(fractionArray[0]) / parseFloat(fractionArray[1] || "1");
  };

  this.getUnit = function (input) {
    const result = regexSplit(input)[1]?.toLowerCase();

    switch (result) {
      case "km":
      case "gal":
      case "lbs":
      case "mi":
      case "kg":
        return result;
      case "l":
        return "L"; // should be represented as an uppercase 'L'
      default:
        return "invalid unit";
    }
  };

  this.getReturnUnit = function (initUnit) {
    let unit = initUnit.toLowerCase();

    switch (unit) {
      case "km":
        return "mi";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "kg":
        return "lbs";
      case "l":
        return "gal";
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function (unit) {
    switch (unit.toLowerCase()) {
      case "mi":
        return "miles";
      case "lbs":
        return "pounds";
      case "gal":
        return "gallons";
      case "kg":
        return "kilograms";
      case "km":
        return "kilometers";
      case "l":
        return "liters";
      default:
        return undefined;
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    //console.log(initNum, initUnit);

    let unit = initUnit.toLowerCase();
    let result;

    //console.log(unit);

    switch (unit) {
      case "km":
        result = initNum / miToKm;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        return undefined;
    }

    return parseFloat(result.toFixed(5)); // rounded to 5 decimals
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
