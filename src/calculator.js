export default class Calculator {
  add(a, b) {
    // check for missing arguments
    if (b === undefined) {
      b = 0;
    }
    if (a === undefined) {
      a = 0;
    }

    // check types and convert strings to numbers
    if (typeof a === "string") {
      a = parseFloat(a);
    }
    if (typeof b === "string") {
      b = parseFloat(b);
    }

    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      isNaN(a) ||
      isNaN(b)
    ) {
      throw new Error("Invalid input");
    }

    return a + b;
  }

  subtract(a, b) {
    // check for missing arguments
    if (a === undefined) {
      a = 0;
    }
    if (b === undefined) {
      b = a;
      a = 0;
    }

    // check types and convert strings to numbers
    if (typeof a === "string") {
      a = parseFloat(a);
    }
    if (typeof b === "string") {
      b = parseFloat(b);
    }

    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      isNaN(a) ||
      isNaN(b)
    ) {
      throw new Error("Invalid input");
    }

    return a - b;
  }

  multiply(a, b) {
    // check for missing arguments
    if (a === undefined) {
      a = 0;
    }
    if (b === undefined) {
      b = 1;
    }

    // check types and convert strings to numbers
    if (typeof a === "string") {
      a = parseFloat(a);
    }
    if (typeof b === "string") {
      b = parseFloat(b);
    }

    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      isNaN(a) ||
      isNaN(b)
    ) {
      throw new Error("Invalid input");
    }
    return a * b;
  }

  divide(a, b) {
    // check for missing arguments
    if (a === undefined) {
      a = 0;
    }
    if (b === undefined) {
      b = 1;
    }

    // check types and convert strings to numbers
    if (typeof a === "string") {
      a = parseFloat(a);
    }
    if (typeof b === "string") {
      b = parseFloat(b);
    }

    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      isNaN(a) ||
      isNaN(b)
    ) {
      throw new Error("Invalid input");
    }
    
    return a / b;
  }
}
