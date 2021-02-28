module.exports = function repeater(str, options) {

  str = String(str);
  let repeatTimes = options["repeatTimes"] > 1 ? options["repeatTimes"] : 1;
  let separator = options["separator"] !== undefined  ? options["separator"] : "+";
  let addition = options["addition"] !== undefined ? String(options["addition"]) : "";
  let additionRepeatTimes = options["additionRepeatTimes"] > 1 ? options["additionRepeatTimes"] : 1;
  let additionSeparator = options["additionSeparator"] !== undefined  ? options["additionSeparator"] : "|";

  return str
    .concat(
      addition
        .concat(additionSeparator)
        .repeat(additionRepeatTimes)
        .slice(0, -additionSeparator.length)
    )
    .concat(separator)
    .repeat(repeatTimes)
    .slice(0, -separator.length);
};
