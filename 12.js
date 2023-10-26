const book = {
  title: "Мартин Иден",
  author: "Джек Лондон",
  year: 1909,

  // метод для получения названия книги
  getTitle: function () {
    return this.title;
  },

  // метод для изменения названия книги
  setTitle: function (newTitle) {
    this.title = newTitle;
  },

  // метод для получения имени автора
  getAuthor: function () {
    return this.author;
  },

  // метод для изменения имени автора
  setAuthor: function (newAuthor) {
    this.author = newAuthor;
  },

  // метод для получения года издания
  getYear: function () {
    return this.year;
  },

  // метод для изменения года издания
  setYear: function (newYear) {
    this.year = newYear;
  },
};

// использование методов объекта
console.log("Название книги:", book.getTitle()); // "Мартин Иден"
console.log("Автор:", book.getAuthor()); // "Джек Лондон"
console.log("Год издания:", book.getYear()); // 1909

// изменение значений свойств
book.setTitle("Немартин Ыдэн");
book.setAuthor("Джек Ньюкасл");
book.setYear(2023);

// проверка измененных значений
console.log("Название книги:", book.getTitle()); // "Немартин Ыдэн"
console.log("Автор:", book.getAuthor()); // "Джек Ньюкасл"
console.log("Год издания:", book.getYear()); // 2023
