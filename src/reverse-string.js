export default function reverseString(str) {
  if (str === null || str === undefined) {
    return "";
  }

  if (typeof str !== "string") {
    str = String(str);
  }

  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}
