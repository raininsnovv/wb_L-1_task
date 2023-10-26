const jsonData =
  '[{"value": 1}, {"value": 2}, {"value": 3}, {"value": 4}, {"value": 5}]';

const jsonToLinkedList = (jsonData) => {
  // преобразование строки JSON в объект
  const data = JSON.parse(jsonData);

  // проверка на массив и непустые данные
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  // инициализация головы связанного списка
  let list = {
    value: data[0].value,
    next: null,
  };

  // итерация по остальным элементам массива
  let current = list;
  for (let i = 1; i < data.length; i++) {
    current.next = {
      value: data[i].value,
      next: null,
    };
    current = current.next;
  }

  return list;
};

const linkedList = jsonToLinkedList(jsonData);
console.log(linkedList);

