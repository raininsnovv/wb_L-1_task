function isPalindrome(str) {
  // убираем ненужные символы из строки, используя регулярное выражение, и приводим строку к нижнему регистру
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  //объявляем начало строки и конец строки
  let pointStart = 0;
  let pointEnd = str.length - 1;

  //проходимся по нашей строке, сравнивая символы от начала строки и от конца строки, пока не встретим отличающиеся друг от друга символы
  while (pointStart < pointEnd) {
    if (str[pointStart] !== str[pointEnd]) {
      //как только символы на определенном участке не совпадут вовзращаемся false
      return false;
    }

    //сужаем область сравнения, увеличивая индекс от начала строки и уменьшая индекс от конца строки
    pointStart++;
    pointEnd--;
  }

  //возвращаем true после успешного прохождения полного цикла
  return true;
}

console.log(isPalindrome("Jose esoj"));

function isPalindrome2(str2) {
  str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return str2 === str2.split("").reverse().join("");
}

console.log(isPalindrome2("Jose esoj"));
