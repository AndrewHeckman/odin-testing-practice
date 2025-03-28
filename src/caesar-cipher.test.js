import caesarCipher from "./caesar-cipher";

// single char
test("shift a by 1", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("shift d by 3", () => {
  expect(caesarCipher("d", 3)).toBe("g");
});

// single word
test("shift hello by 1", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("shift hello by 3", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

// multiple words
test("shift hello world by 1", () => {
  expect(caesarCipher("hello world", 1)).toBe("ifmmp xpsme");
});

test("shift hello world by 3", () => {
  expect(caesarCipher("hello world", 3)).toBe("khoor zruog");
});

// punctuation
test("shift hello, world! by 1", () => {
  expect(caesarCipher("hello, world!", 1)).toBe("ifmmp, xpsme!");
});

test("shift h.e,l;;l'o\"w$o%r^l&d by 3", () => {
  expect(caesarCipher("h.e,l;;l'o\"w$o%r^l&d", 3)).toBe(
    "k.h,o;;o'r\"z$r%u^o&g",
  );
});

// capitals
test("shift Hello World by 1", () => {
  expect(caesarCipher("Hello World", 1)).toBe("Ifmmp Xpsme");
});

test("shift Hello World by 3", () => {
  expect(caesarCipher("Hello World", 3)).toBe("Khoor Zruog");
});

// numbers
test("shift 123 by 1", () => {
  expect(caesarCipher("123", 1)).toBe("123");
});

// num 0
test("shift hello world by 0", () => {
  expect(caesarCipher("hello world", 0)).toBe("hello world");
});

// num 26
test("shift hello world by 26", () => {
  expect(caesarCipher("hello world", 26)).toBe("hello world");
});

// num 27
test("shift hello world by 27", () => {
  expect(caesarCipher("hello world", 27)).toBe("ifmmp xpsme");
});

// num -1
test("shift hello world by -1", () => {
  expect(caesarCipher("hello world", -1)).toBe("gdkkn vnqkc");
});

// empty string
test("shift empty string by 1", () => {
  expect(caesarCipher("", 1)).toBe("");
});

// empty number
test("shift hello world by empty number", () => {
  expect(caesarCipher("hello world")).toBe("hello world");
});

// invalid input
test("shift hello world by a", () => {
  expect(caesarCipher("hello world", "a")).toBe("hello world");
});

test("shift 123 by 1", () => {
  expect(() => caesarCipher(123, 1)).toThrow("Invalid input");
});

test("shift hello world by 1.5", () => {
  expect(caesarCipher("hello world", 1.5)).toBe("ifmmp xpsme");
});

test("shift nothing", () => {
  expect(() => caesarCipher()).toThrow("Invalid input");
});

test("shift hello world by nothing", () => {
  expect(caesarCipher("hello world")).toBe("hello world");
});

test("shift hello world by null", () => {
  expect(caesarCipher("hello world", null)).toBe("hello world");
});

test("shift hello world by undefined", () => {
  expect(caesarCipher("hello world", undefined)).toBe("hello world");
});

test("shift hello world by NaN", () => {
  expect(caesarCipher("hello world", NaN)).toBe("hello world");
});

test("shift hello world by Infinity", () => {
  expect(caesarCipher("hello world", Infinity)).toBe("hello world");
});
