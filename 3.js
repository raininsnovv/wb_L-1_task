const MathX = function () {
  let num = 0;
  let nextNum = 1;

  let arr = [0, 1];

  const fibN = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    for (let i = 2; i <= n; i++) {
      let currentNum = num + nextNum;
      num = nextNum;
      nextNum = currentNum;
    }
    return nextNum;
  };

  const fibArr = (n) => {
    for (let i = 2; i <= n; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  };

  const isPrimeNum = (n) => {
    if (n < 2) {
      return false;
    }

    // for (let i = 2; i < n; i++) 
    for (let i = 2; i <= Math.sqrt(n); i++){
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  const primeArr = (n) => {
    let resultArr = [];
    for (let i = 2; i <= n; i++) {
      if (isPrimeNum(i)) {
        resultArr.push(i);
      }
    }
    return resultArr;
  };

  return {
    fibN,
    fibArr,
    isPrimeNum,
    primeArr,
  };
};

const mathX = MathX();

console.log(mathX.fibN(7));

console.log(mathX.fibArr(7));

console.log(mathX.isPrimeNum(2));

console.log(mathX.primeArr(39));
