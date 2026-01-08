function pelindromeCheck(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log(pelindromeCheck("hello"));
