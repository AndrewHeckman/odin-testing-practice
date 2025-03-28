import Calculator from "./calculator";

let calculator = new Calculator();

describe("add", () => {
  // positive integers
  test("add 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  // negative integers
  test("add -1 + -2 to equal -3", () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  // mixed sign integers
  test("add 1 + -2 to equal -1", () => {
    expect(calculator.add(1, -2)).toBe(-1);
  });

  test("add -1 + 2 to equal 1", () => {
    expect(calculator.add(-1, 2)).toBe(1);
  });

  // positive floats
  test("add 1.1 + 2.2 to equal 3.3", () => {
    expect(calculator.add(1.1, 2.2)).toBeCloseTo(3.3);
  });

  // negative floats
  test("add -1.1 + -2.2 to equal -3.3", () => {
    expect(calculator.add(-1.1, -2.2)).toBeCloseTo(-3.3);
  });

  // mixed sign floats
  test("add 1.1 + -2.2 to equal -1.1", () => {
    expect(calculator.add(1.1, -2.2)).toBeCloseTo(-1.1);
  });

  test("add -1.1 + 2.2 to equal 1.1", () => {
    expect(calculator.add(-1.1, 2.2)).toBeCloseTo(1.1);
  });

  // zero
  test("add 0 + 0 to equal 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("add 0 + 1 to equal 1", () => {
    expect(calculator.add(0, 1)).toBe(1);
  });

  test("add 0 + -1 to equal -1", () => {
    expect(calculator.add(0, -1)).toBe(-1);
  });

  test("add -1 + 0 to equal -1", () => {
    expect(calculator.add(-1, 0)).toBe(-1);
  });

  // mixed number types
  test("add 1 + 1.1 to equal 2.1", () => {
    expect(calculator.add(1, 1.1)).toBeCloseTo(2.1);
  });

  test("add 1.1 + -1 to equal -0.1", () => {
    expect(calculator.add(1.1, -1)).toBeCloseTo(0.1);
  });

  // edge cases
  test("add 1 + max value to equal max value", () => {
    expect(calculator.add(1, Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
  });

  test("add -1 + -max value to equal -max value", () => {
    expect(calculator.add(-1, -Number.MAX_VALUE)).toBe(-Number.MAX_VALUE);
  });

  // string handling
  test("add '1' + '2' to equal 3", () => {
    expect(calculator.add("1", "2")).toBe(3);
  });

  // invalid input
  test("add one argument to equal argument", () => {
    expect(calculator.add(1)).toBe(1);
  });

  test("add no arguments to equal 0", () => {
    expect(calculator.add()).toBe(0);
  });

  test("add 'a' + 1 to throw error", () => {
    expect(() => {
      calculator.add("a", 1);
    }).toThrow("Invalid input");
  });

  test("add object to throw error", () => {
    expect(() => {
      calculator.add(1, {});
    }).toThrow("Invalid input");
  });

  test("add null to throw error", () => {
    expect(() => {
      calculator.add(1, null);
    }).toThrow("Invalid input");
  });

  // infinity
  test("add 1 + Infinity to equal Infinity", () => {
    expect(calculator.add(1, Infinity)).toBe(Infinity);
  });

  test("add -1 + Infinity to equal Infinity", () => {
    expect(calculator.add(-1, Infinity)).toBe(Infinity);
  });

  test("add 1 + -Infinity to equal -Infinity", () => {
    expect(calculator.add(1, -Infinity)).toBe(-Infinity);
  });

  test("add -1 + -Infinity to equal -Infinity", () => {
    expect(calculator.add(-1, -Infinity)).toBe(-Infinity);
  });
});

describe("subtract", () => {
  // positive integers
  test("subtract 1 - 2 to equal -1", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  // negative integers
  test("subtract -1 - -2 to equal 1", () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  });

  // mixed sign integers
  test("subtract 1 - -2 to equal 3", () => {
    expect(calculator.subtract(1, -2)).toBe(3);
  });

  test("subtract -1 - 2 to equal -3", () => {
    expect(calculator.subtract(-1, 2)).toBe(-3);
  });

  // positive floats
  test("subtract 1.1 - 2.2 to equal -1.1", () => {
    expect(calculator.subtract(1.1, 2.2)).toBeCloseTo(-1.1);
  });

  // negative floats
  test("subtract -1.1 - -2.2 to equal 1.1", () => {
    expect(calculator.subtract(-1.1, -2.2)).toBeCloseTo(1.1);
  });

  // mixed sign floats
  test("subtract 1.1 - -2.2 to equal 3.3", () => {
    expect(calculator.subtract(1.1, -2.2)).toBeCloseTo(3.3);
  });

  test("subtract -1.1 - 2.2 to equal -3.3", () => {
    expect(calculator.subtract(-1.1, 2.2)).toBeCloseTo(-3.3);
  });

  // zero
  test("subtract 0 - 0 to equal 0", () => {
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  test("subtract 0 - 1 to equal -1", () => {
    expect(calculator.subtract(0, 1)).toBe(-1);
  });

  test("subtract 0 - -1 to equal 1", () => {
    expect(calculator.subtract(0, -1)).toBe(1);
  });

  test("subtract -1 - 0 to equal -1", () => {
    expect(calculator.subtract(-1, 0)).toBe(-1);
  });

  // mixed number types
  test("subtract 1 - 1.1 to equal -0.1", () => {
    expect(calculator.subtract(1, 1.1)).toBeCloseTo(-0.1);
  });

  test("subtract 1.1 - -1 to equal 2.1", () => {
    expect(calculator.subtract(1.1, -1)).toBeCloseTo(2.1);
  });

  // edge cases
  test("subtract -1 - max value to equal -max value", () => {
    expect(calculator.subtract(1, Number.MAX_VALUE)).toBe(-Number.MAX_VALUE);
  });

  test("subtract 1 - -max value to equal max value", () => {
    expect(calculator.subtract(-1, -Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
  });

  // string handling
  test("subtract '1' - '2' to equal -1", () => {
    expect(calculator.subtract("1", "2")).toBe(-1);
  });

  // invalid input
  test("subtract one argument to equal negative argument", () => {
    expect(calculator.subtract(1)).toBe(-1);
  });

  test("subtract no arguments to equal 0", () => {
    expect(calculator.subtract()).toBe(0);
  });

  test("subtract 'a' - 1 to throw error", () => {
    expect(() => {
      calculator.subtract("a", 1);
    }).toThrow("Invalid input");
  });

  test("subtract object to throw error", () => {
    expect(() => {
      calculator.subtract(1, {});
    }).toThrow("Invalid input");
  });

  test("subtract null to throw error", () => {
    expect(() => {
      calculator.subtract(1, null);
    }).toThrow("Invalid input");
  });

  // infinity
  test("subtract 1 - Infinity to equal -Infinity", () => {
    expect(calculator.subtract(1, Infinity)).toBe(-Infinity);
  });

  test("subtract Infinity - 1 to equal Infinity", () => {
    expect(calculator.subtract(Infinity, 1)).toBe(Infinity);
  });

  test("subtract 1 - -Infinity to equal Infinity", () => {
    expect(calculator.subtract(1, -Infinity)).toBe(Infinity);
  });

  test("subtract -Infinity - 1 to equal -Infinity", () => {
    expect(calculator.subtract(-Infinity, 1)).toBe(-Infinity);
  });
});

describe("multiply", () => {
  // positive integers
  test("multiply 2 * 3 to equal 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  // negative integers
  test("multiply -2 * -3 to equal 6", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

  // mixed sign integers
  test("multiply 2 * -3 to equal -6", () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
  });

  // positive floats
  test("multiply 2.2 * 3.3 to equal 7.26", () => {
    expect(calculator.multiply(2.2, 3.3)).toBeCloseTo(7.26);
  });

  // negative floats
  test("multiply -2.2 * -3.3 to equal 7.26", () => {
    expect(calculator.multiply(-2.2, -3.3)).toBeCloseTo(7.26);
  });

  // mixed sign floats
  test("multiply 2.2 * -3.3 to equal -7.26", () => {
    expect(calculator.multiply(2.2, -3.3)).toBeCloseTo(-7.26);
  });

  // zero
  test("multiply 0 * 0 to equal 0", () => {
    expect(calculator.multiply(0, 0)).toBe(0);
  });

  test("multiply 0 * 1 to equal 0", () => {
    expect(calculator.multiply(0, 1)).toBe(0);
  });

  // mixed number types
  test("multiply 2 * 3.3 to equal 6.6", () => {
    expect(calculator.multiply(2, 3.3)).toBeCloseTo(6.6);
  });

  test("multiply 2.2 * -3 to equal -6.6", () => {
    expect(calculator.multiply(2.2, -3)).toBeCloseTo(-6.6);
  });

  // edge cases
  test("multiply 2 * max value to equal Infinity", () => {
    expect(calculator.multiply(2, Number.MAX_VALUE)).toBe(Infinity);
  });

  test("multiply -2 * max value to equal -Infinity", () => {
    expect(calculator.multiply(-2, Number.MAX_VALUE)).toBe(-Infinity);
  });

  // string handling
  test("multiply '2' * '3' to equal 6", () => {
    expect(calculator.multiply("2", "3")).toBe(6);
  });

  // invalid input
  test("multiply one argument to equal argument", () => {
    expect(calculator.multiply(2)).toBe(2);
  });

  test("multiply no arguments to equal 0", () => {
    expect(calculator.multiply()).toBe(0);
  });

  test("multiply 'a' * 2 to throw error", () => {
    expect(() => {
      calculator.multiply("a", 2);
    }).toThrow("Invalid input");
  });

  test("multiply object to throw error", () => {
    expect(() => {
      calculator.multiply(2, {});
    }).toThrow("Invalid input");
  });

  test("multiply null to throw error", () => {
    expect(() => {
      calculator.multiply(2, null);
    }).toThrow("Invalid input");
  });

  // infinity
  test("multiply 2 * Infinity to equal Infinity", () => {
    expect(calculator.multiply(2, Infinity)).toBe(Infinity);
  });

  test("multiply -2 * Infinity to equal -Infinity", () => {
    expect(calculator.multiply(-2, Infinity)).toBe(-Infinity);
  });

  test("multiply 2 * -Infinity to equal -Infinity", () => {
    expect(calculator.multiply(2, -Infinity)).toBe(-Infinity);
  });

  test("multiply -2 * -Infinity to equal Infinity", () => {
    expect(calculator.multiply(-2, -Infinity)).toBe(Infinity);
  });

  test("multiply 0 * Infinity to equal NaN", () => {
    expect(calculator.multiply(0, Infinity)).toBe(NaN);
  });

  test("multiply 0.5 * Infinity to equal Infinity", () => {
    expect(calculator.multiply(0.5, Infinity)).toBe(Infinity);
  });
});

describe("divide", () => {
  // positive integers
  test("divide 6 / 2 to equal 3", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("divide 5 / 10 to equal 0.5", () => {
    expect(calculator.divide(10, 5)).toBeCloseTo(2);
  });

  // negative integers
  test("divide -6 / -2 to equal 3", () => {
    expect(calculator.divide(-6, -2)).toBe(3);
  });

  // mixed sign integers
  test("divide 6 / -2 to equal -3", () => {
    expect(calculator.divide(6, -2)).toBe(-3);
  });

  test("divide -6 / 2 to equal -3", () => {
    expect(calculator.divide(-6, 2)).toBe(-3);
  });

  // positive floats
  test("divide 6.6 / 2.2 to equal 3", () => {
    expect(calculator.divide(6.6, 2.2)).toBeCloseTo(3);
  });

  test("divide 6.6 / 2.1 to equal 3.142857142857143", () => {
    expect(calculator.divide(6.6, 2.1)).toBeCloseTo(3.142857142857143);
  });

  // negative floats
  test("divide -6.6 / -2.2 to equal 3", () => {
    expect(calculator.divide(-6.6, -2.2)).toBeCloseTo(3);
  });

  // mixed sign floats
  test("divide 6.6 / -2.2 to equal -3", () => {
    expect(calculator.divide(6.6, -2.2)).toBeCloseTo(-3);
  });

  test("divide -6.6 / 2.2 to equal -3", () => {
    expect(calculator.divide(-6.6, 2.2)).toBeCloseTo(-3);
  });

  // zero
  test("divide 0 / 1 to equal 0", () => {
    expect(calculator.divide(0, 1)).toBe(0);
  });

  test("divide 0 / -1 to equal 0", () => {
    expect(calculator.divide(0, -1)).toBe(-0);
  });

  test("divide 1 / 0 to equal Infinity", () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
  });

  // mixed number types
  test("divide 6 / 2.0 to equal 3", () => {
    expect(calculator.divide(6, 2.0)).toBe(3);
  });

  test("divide 6.6 / 2 to equal 3.3", () => {
    expect(calculator.divide(6.6, 2)).toBeCloseTo(3.3);
  });

  // edge cases
  test("divide 1 / max value to equal a very small number", () => {
    expect(calculator.divide(1, Number.MAX_VALUE)).toBeCloseTo(0);
  });

  test("divide max value / 1 to equal max value", () => {
    expect(calculator.divide(Number.MAX_VALUE, 1)).toBe(Number.MAX_VALUE);
  });

  // string handling
  test("divide '6' / '2' to equal 3", () => {
    expect(calculator.divide("6", "2")).toBe(3);
  });

  // invalid input
  test("divide one argument to equal argument", () => {
    expect(calculator.divide(6)).toBe(6);
  });

  test("divide no arguments to equal 0", () => {
    expect(calculator.divide()).toBe(0);
  });

  test("divide 'a' / 2 to throw error", () => {
    expect(() => {
      calculator.divide("a", 2);
    }).toThrow("Invalid input");
  });

  test("divide object to throw error", () => {
    expect(() => {
      calculator.divide(6, {});
    }).toThrow("Invalid input");
  });

  test("divide null to throw error", () => {
    expect(() => {
      calculator.divide(6, null);
    }).toThrow("Invalid input");
  });

  // infinity
  test("divide 1 / Infinity to equal 0", () => {
    expect(calculator.divide(1, Infinity)).toBe(0);
  });

  test("divide -1 / Infinity to equal 0", () => {
    expect(calculator.divide(-1, Infinity)).toBe(-0);
  });

  test("divide Infinity / 1 to equal Infinity", () => {
    expect(calculator.divide(Infinity, 1)).toBe(Infinity);
  });

  test("divide Infinity / -1 to equal -Infinity", () => {
    expect(calculator.divide(Infinity, -1)).toBe(-Infinity);
  });

  test("divide 1 / -Infinity to equal 0", () => {
    expect(calculator.divide(1, -Infinity)).toBe(-0);
  });

  test("divide -1 / -Infinity to equal 0", () => {
    expect(calculator.divide(-1, -Infinity)).toBe(0);
  });
});
