'use strict';

/**
  * get the thousand group:
    * 0 -> values less than 1000
    * 1 -> thousands
    * 2 -> millions
    * 3 -> trillions
*/
function getGroup(value) {
  return Math.floor((value.toString().length - 1) / 3);
}

/**
  * get the suffix based in the group
  * adding "Q" due the possibility of 999999999999999 be rounded to 1Q
*/
function getSuffix(group) {
  let suffixOptions = ["", "K", "M", "B", "T", "Q"];
  return suffixOptions[group];
}

/**
  * Calculate the abbreviated value
  * The exercise asks for a decimal round if the number is not an integer. Because of that I used the strategy to
  * multiply the number per 10, round it and divide per 10. If the exercise was asking one decimal in all cases we
  * could use toFixed.
*/
function getAbbrValue(value, group) {
  return Math.round(value / Math.pow(1000,group) * 10) / 10;
}

function numberPrettifier(value) {
  // to calculate the size of the number we need to remove the negative signal and consider only the integer part of the number
  let size = Math.trunc(Math.abs(value)).toString().length;

  if (size > 6 && size < 16) {
    // we will use the abs of the value in order to avoid to run Math.abs more than once
    let absValue = Math.round(Math.abs(value));
    let group = getGroup(absValue);
    let abbrValue = getAbbrValue(absValue, group);

    // in case of values like 999,999,999 we need to validate if the abbrValue is 1000 and move the value to the next group
    // ie: 999,999,999 would be 1T
    if (abbrValue === 1000) {
      group++;
      abbrValue = 1;
    }

    // if the value is < 0 we need to add the negative signal in the return value
    value = (value < 0 ? '-' : '') + abbrValue + getSuffix(group);
  }
  return value;
}

module.exports = {
  numberPrettifier : numberPrettifier
};
