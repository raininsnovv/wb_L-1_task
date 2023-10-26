const caseConjugation = (num, form) => {
  if (num % 10 === 1 && num % 100 !== 11) {
    return num + " " + form[0];
  } else if (
    num % 10 >= 2 &&
    num % 10 <= 4 &&
    (num % 100 < 10 || num % 100 >= 20)
  ) {
    return num + " " + form[1];
  } else return num + " " + form[2];
};
console.log(caseConjugation(113, ["пользователь", "пользователя", "пользователей"])); 

