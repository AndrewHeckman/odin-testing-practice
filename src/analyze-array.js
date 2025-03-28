export default function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }

  let min = Number(arr[0]);
  let max = Number(arr[0]);
  let sum = 0;
  let length = 0;

  arr.forEach((num) => {
    if (typeof num !== "number") {
      num = Number(num);
    }

    if(isFinite(num)) {
      if (num < min) {
        min = num;
      }
  
      if (num > max) {
        max = num;
      }
  
      sum += num;
      length += 1;
    }
  });

  if( sum === Infinity ) {
    return {
      average: Number.MAX_VALUE,
      min,
      max,
      length
    };
  }

  if (sum === -Infinity) {
    return {
      average: -Number.MAX_VALUE,
      min,
      max,
      length
    };
  }

  if(length === 0) {
    return {
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0
    };
  }

  return {
    average: sum / length,
    min,
    max,
    length
  };
}
