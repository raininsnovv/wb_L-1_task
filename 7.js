const arrFunc = [
  function () {
    return 10 * 4;
  },
  function () {
    return 12 / 6;
  },
  function () {
    return 10 - 5;
  },
];

for (let i = 0; i < arrFunc.length; i++) {
  console.log(`Результат функции ${i + 1}: ${arrFunc[i]()}`);
}
