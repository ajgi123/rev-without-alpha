const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("string") as HTMLInputElement;
const result = document.getElementById("result") as HTMLTitleElement;

const reverseStringWithoutAlpha = (str: string) => {
  const alphaNumRegex = /[ąćęłńóśźż\w]/i;
  const stringArr: string[] = [];
  const indexToSwap: number[] = [];

  for (let i = 0; i < str.length; i++) {
    let start = 0;
    let slice = "";

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
  for (let i = 0; i < Math.floor(indexToSwap.length / 2); i++) {
    let swap = stringArr[indexToSwap[i]];
    stringArr[indexToSwap[i]] =
    stringArr[indexToSwap[indexToSwap.length - 1 - i]];
    stringArr[indexToSwap[indexToSwap.length - 1 - i]] = swap;
  }
  return stringArr.join("");
};

const submitHandler = (event: Event) => {
  event.preventDefault();
  const res = reverseStringWithoutAlpha(input.value);
  input.value = "";
  result.innerText = res;
};

form.addEventListener("submit", submitHandler);
