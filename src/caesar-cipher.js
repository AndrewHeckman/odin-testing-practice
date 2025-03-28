const lower = "abcdefghijklmnopqrstuvwxyz".split("");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function caesarCipher(str, num) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }

  if (num === 0 || typeof num !== "number" || !isFinite(num)) {
    return str;
  }

  while (num < 0) {
    num += 26;
  }

  num = Math.floor(num) % 26;

  const result = str.split("").map((char) => shift(char, num)).join("");

  return result;
}

function shift(char, shift) {
  if (lower.includes(char)) {
    return lower[(lower.indexOf(char) + shift) % 26];
  } else if (upper.includes(char)) {
    return upper[(upper.indexOf(char) + shift) % 26];
  } else {
    return char;
  }
}
