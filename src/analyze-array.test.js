import analyzeArray from "./analyze-array";

test("positive integer arrays", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: expect.closeTo(4),
    min: 1,
    max: 8,
    length: 6
  });

  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
    average: expect.closeTo(3.5),
    min: 1,
    max: 6,
    length: 6
  });

  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toEqual({
    average: expect.closeTo(4),
    min: 1,
    max: 7,
    length: 7
  });
});

test("negative integer arrays", () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
    average: expect.closeTo(-4),
    min: -8,
    max: -1,
    length: 6
  });

  expect(analyzeArray([-1, -2, -3, -4, -5, -6])).toEqual({
    average: expect.closeTo(-3.5),
    min: -6,
    max: -1,
    length: 6
  });

  expect(analyzeArray([-1, -2, -3, -4, -5, -6, -7])).toEqual({
    average: expect.closeTo(-4),
    min: -7,
    max: -1,
    length: 7
  });
});

test("mixed integer arrays", () => {
  expect(analyzeArray([-1, 8, -3, 4, -2, 6])).toEqual({
    average: expect.closeTo(2),
    min: -3,
    max: 8,
    length: 6
  });

  expect(analyzeArray([-1, 2, -3, 4, -5, 6])).toEqual({
    average: expect.closeTo(0.5),
    min: -5,
    max: 6,
    length: 6
  });

  expect(analyzeArray([-1, 2, -3, 4, -5, 6, -7])).toEqual({
    average: expect.closeTo(-4/7),
    min: -7,
    max: 6,
    length: 7
  });
});

test("positive float arrays", () => {
  expect(analyzeArray([1.1, 8.2, 3.3, 4.4, 2.5, 6.6])).toEqual({
    average: expect.closeTo(4.35),
    min: 1.1,
    max: 8.2,
    length: 6
  });

  expect(analyzeArray([1.1, 2.2, 3.3, 4.4, 5.5, 6.6])).toEqual({
    average: expect.closeTo(3.85),
    min: 1.1,
    max: 6.6,
    length: 6
  });

  expect(analyzeArray([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7])).toEqual({
    average: expect.closeTo(4.4),
    min: 1.1,
    max: 7.7,
    length: 7
  });
});

test("negative float arrays", () => {
  expect(analyzeArray([-1.1, -8.2, -3.3, -4.4, -2.5, -6.6])).toEqual({
    average: expect.closeTo(-4.35),
    min: -8.2,
    max: -1.1,
    length: 6
  });

  expect(analyzeArray([-1.1, -2.2, -3.3, -4.4, -5.5, -6.6])).toEqual({
    average: expect.closeTo(-3.85),
    min: -6.6,
    max: -1.1,
    length: 6
  });

  expect(analyzeArray([-1.1, -2.2, -3.3, -4.4, -5.5, -6.6, -7.7])).toEqual({
    average: expect.closeTo(-4.4),
    min: -7.7,
    max: -1.1,
    length: 7
  });
});

test("mixed float arrays", () => {
  expect(analyzeArray([-1.1, 8.2, -3.3, 4.4, -2.5, 6.6])).toEqual({
    average: expect.closeTo(2.05),
    min: -3.3,
    max: 8.2,
    length: 6
  });

  expect(analyzeArray([-1.1, 2.2, -3.3, 4.4, -5.5, 6.6])).toEqual({
    average: expect.closeTo(0.55),
    min: -5.5,
    max: 6.6,
    length: 6
  });

  expect(analyzeArray([-1.1, 2.2, -3.3, 4.4, -5.5, 6.6, -7.7])).toEqual({
    average: expect.closeTo(-4.4/7),
    min: -7.7,
    max: 6.6,
    length: 7
  });
});

test("empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0
  });
});

test("type coercion", () => {
  expect(analyzeArray(["1", "8", "3", "4", "2", "6"])).toEqual({
    average: expect.closeTo(4),
    min: 1,
    max: 8,
    length: 6
  });

  expect(analyzeArray(["-1", "-8", "-3", "-4", "-2", "-6"])).toEqual({
    average: expect.closeTo(-4),
    min: -8,
    max: -1,
    length: 6
  });

  expect(analyzeArray(["-1.1", "8.2", "-3.3", "4.4", "-2.5", "6.6"])).toEqual({
    average: expect.closeTo(2.05),
    min: -3.3,
    max: 8.2,
    length: 6
  });

  expect(analyzeArray(["1", 8, "3", 4, "2", 6])).toEqual({
    average: expect.closeTo(4),
    min: 1,
    max: 8,
    length: 6
  });
});

test("bad values", () => {
  expect(analyzeArray(["a", "b", "c"])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0
  });

  expect(analyzeArray([null, undefined, NaN])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1
  });

  expect(analyzeArray([null, undefined, NaN, "a", "b", "c", 1, 2, 3])).toEqual({
    average: expect.closeTo(1.5),
    min: 0,
    max: 3,
    length: 4
  });

  expect(()=>{analyzeArray()}).toThrow("Invalid input");

  expect(()=>{analyzeArray({})}).toThrow("Invalid input");

  expect(()=>{analyzeArray(12)}).toThrow("Invalid input");

  expect(()=>{analyzeArray("12")}).toThrow("Invalid input");
});

test("overflow", () => {
  expect(analyzeArray([Number.MAX_VALUE, Number.MAX_VALUE])).toEqual({
    average: Number.MAX_VALUE,
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE,
    length: 2
  });

  expect(analyzeArray([-Number.MAX_VALUE, -Number.MAX_VALUE])).toEqual({
    average: -Number.MAX_VALUE,
    min: -Number.MAX_VALUE,
    max: -Number.MAX_VALUE,
    length: 2
  });

  expect(analyzeArray([Number.MIN_VALUE, Number.MIN_VALUE])).toEqual({
    average: Number.MIN_VALUE,
    min: Number.MIN_VALUE,
    max: Number.MIN_VALUE,
    length: 2
  });
});