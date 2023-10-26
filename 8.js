const funcArrExec = (arr) => {
  return () => {
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
      resArr.push(arr[i]());
    }
    return resArr;
  };
};

const arrFuncRes = funcArrExec([
  function () {
    return 10 * 4;
  },
  function () {
    return 12 / 6;
  },
  function () {
    return 10 - 5;
  },
]);

console.log(arrFuncRes());


/*  // без использования анонимных функций 

const multiplyByTen = () => 10 * 4;
const divideByTwo = () => 12 / 6;
const subtractFive = () => 10 - 5;

const funcArrExec = (arr) => {
  return () => {
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
      resArr.push(arr[i]());
    }
    return resArr;
  };
};

const arrFuncRes = funcArrExec([multiplyByTen, divideByTwo, subtractFive]);

console.log(arrFuncRes());




*/