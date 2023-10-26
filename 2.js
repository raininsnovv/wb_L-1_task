const isStrangeNumber = (num) => {
  //инициализируем переменную суммы
  let sum = 0;

  //проходимся по делителям
  for (let i = 1; i < num; i++) {
    //увеличиваем сумму, если выполняется нужное условие
    if (num % i === 0) {
      sum += i;
    }
  }
  //сравниваем изначальное число с полученной суммой
  return sum === num;
};
console.log(isStrangeNumber(36));



const isStrangeNumber2 = (num2) => {
  // 1 всегда является делителем и суммируется
  let sum2 = 1;

  //начинаем цикл с 2, и сужаем количество циклов, выводя квадратный корень числа num2
  for (let i = 2; i <= Math.sqrt(num2); i++) {
    if (num2 % i === 0) {
      sum2 += i;

      // если делители разные, то учитываем второй делитель
      if (i !== num2 / i) {
        sum2 += num2 / i;
      }
    }
  }

  return sum2 === num2;
};

console.log(isStrangeNumber(36));
