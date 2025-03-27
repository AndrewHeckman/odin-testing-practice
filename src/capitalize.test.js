import capitalize from "./capitalize";

test("capitalize 'hello' to equal 'Hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize 'hello world' to equal 'Hello world'", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("capitalize 'HELLO' to equal 'Hello'", () => {
  expect(capitalize("HELLO")).toBe("Hello");
});

test("capitalize 'h' to equal 'H'", () => {
  expect(capitalize("h")).toBe("H");
});

test("handle numbers", () => {
  expect(capitalize(123)).toBe("123");
});

test("handle objects", () => {
  expect(capitalize({})).toBe("[object object]");
});

test("handle true", () => {
  expect(capitalize(true)).toBe("True");
});

test("handle false", () => {
  expect(capitalize(false)).toBe("False");
});

test("handle empty string", () => {
  expect(capitalize("")).toBe("");
});

test("handle null", () => {
  expect(capitalize(null)).toBe("");
});

test("handle undefined", () => {
  expect(capitalize()).toBe("");
});
