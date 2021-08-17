var form = document.getElementById("form");
var input = document.getElementById("string");
var result = document.getElementById("result");
var reverseStringWithoutAlpha = function (str) {
  var alphaNumRegex = /[ąćęłńóśźż\w]/i;
  var stringArr = [];
  var indexToSwap = [];
  for (var i = 0; i < str.length; i++) {
    var start = 0;
    var slice = "";
    if (alphaNumRegex.test(str[i])) {
      start = i;
      while (i < str.length && alphaNumRegex.test(str[i])) {
        i++;
      }
      slice = str.slice(start, i);
      console.log("slice", slice);
      stringArr.push(slice);
      indexToSwap.push(stringArr.length - 1);
      i--;
      continue;
    }
    if (!alphaNumRegex.test(str[i])) {
      start = i;
      while (i < str.length && !alphaNumRegex.test(str[i])) {
        i++;
      }
      slice = str.slice(start, i);
      console.log("slice", slice);
      stringArr.push(slice);
      i--;
      continue;
    }
  }
  for (var i = 0; i < Math.floor(indexToSwap.length / 2); i++) {
    var swap = stringArr[indexToSwap[i]];
    stringArr[indexToSwap[i]] =
      stringArr[indexToSwap[indexToSwap.length - 1 - i]];
    stringArr[indexToSwap[indexToSwap.length - 1 - i]] = swap;
  }
  return stringArr.join("");
};
var submitHandler = function (event) {
  event.preventDefault();
  var res = reverseStringWithoutAlpha(input.value);
  input.value = "";
  result.innerText = res;
};
form.addEventListener("submit", submitHandler);
