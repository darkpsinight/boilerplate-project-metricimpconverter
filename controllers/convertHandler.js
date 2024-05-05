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
    let unit = initUnit.toLowerCase();
    console.log(unit);

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
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
