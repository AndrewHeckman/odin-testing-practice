import reverseString from "./reverse-string";

test("reverse single character string", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverse single word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse multiple words", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverse capitalized words", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("reverse numbers", () => {
  expect(reverseString(12345)).toBe("54321");
});

test("reverse object", () => {
  expect(reverseString({})).toBe("]tcejbO tcejbo[");
});

test("reverse true", () => {
  expect(reverseString(true)).toBe("eurt");
});

test("reverse false", () => {
  expect(reverseString(false)).toBe("eslaf");
});

test("reverse empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverse null", () => {
  expect(reverseString(null)).toBe("");
});

test("reverse undefined", () => {
  expect(reverseString(undefined)).toBe("");
});
