module.exports = function reverse (n) {
  let newNumber = Math.abs(n),
      newString = String(newNumber),
      reversedString = newString.split("").reverse().join(""),
      reversedNumber = Number(reversedString);
  return reversedNumber;
}
