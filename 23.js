function checkPasswordStrength(password) {
  // установка минимальной длины пароля
  const minLength = 8;

  // проверка длины пароля
  if (password.length < minLength) {
    return `Ошибочка! Пароль коротковат. Минимальная длина пароля: ${minLength} символов.`;
  }

  //поверка разного регистра букв
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);

  // проверка наличия цифр
  const hasNumbers = /\d/.test(password);

  //проверка наличия специальных символов
  const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

  //оценка сложности пароля на основе проверок
  if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
    return "Молодчина! Пароль сильный.";
  } else if (
    (hasUpperCase || hasLowerCase) &&
    hasNumbers &&
    password.length >= minLength
  ) {
    return "Неплохо! Пароль средней сложности. Рекомендуется добавить специальные символы для усиления безопасности.";
  } else {
    return "Пароль слабоват. Рекомендуется использовать буквы в верхнем и нижнем регистре, цифры и специальные символы.";
  }
}

const userPassword = "Zeleb0ba@";
const passwordStrength = checkPasswordStrength(userPassword);
console.log(passwordStrength);
