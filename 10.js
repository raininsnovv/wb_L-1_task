function manualParse(jsonString) {
  let index = 0;

  function skipWhitespace() {
    while (
      jsonString[index] === " " ||
      jsonString[index] === "\n" ||
      jsonString[index] === "\t" ||
      jsonString[index] === "\r"
    ) {
      index++;
    }
  }
  function parseString() {
    index++; // пропустить открывающую кавычку
    const start = index;
    while (jsonString[index] !== '"') {
      index++;
    }
    const value = jsonString.slice(start, index); // получить строку
    index++; // пропустить закрывающую кавычку
    return value;
  }

  function parseNumber() {
    const start = index;
    while (
      jsonString[index] !== "," &&
      jsonString[index] !== "]" &&
      jsonString[index] !== "}" &&
      jsonString[index] !== undefined
    ) {
      index++;
    }
    const numStr = jsonString.slice(start, index).trim();
    return parseFloat(numStr);
  }

  function parseArray() {
    const arr = [];
    index++; // пропустить открывающую скобку
    while (jsonString[index] !== "]") {
      arr.push(parseValue());
      skipWhitespace();
      if (jsonString[index] === ",") {
        index++;
      }
    }
    index++; // пропустить закрывающую скобку
    return arr;
  }

  function parseObject() {
    const obj = {};
    index++; // пропустить открывающую фигурную скобку
    while (jsonString[index] !== "}") {
      const key = parseString();
      skipWhitespace();
      index++; // пропустить двоеточие
      skipWhitespace();
      const value = parseValue();
      obj[key] = value;
      skipWhitespace();
      if (jsonString[index] === ",") {
        index++;
      }
    }
    index++; // пропустить закрывающую фигурную скобку
    return obj;
  }

  function parseValue() {
    const char = jsonString[index];
    skipWhitespace();

    if (char === "t") {
      // true
      index += 4;
      return true;
    }

    if (char === "f") {
      // false
      index += 5;
      return false;
    }

    if (char === "n") {
      // null
      index += 4;
      return null;
    }

    if (char === '"') {
      // string
      return parseString();
    }

    if (char === "{") {
      return parseObject();
    }

    if (char === "[") {
      return parseArray();
    }

    return parseNumber();
  }
  return parseValue();
}

const jsonString =
  '{"name":"John Doe","age":30,"city":"New York","isStudent":false,"grades":[95, 89, 78],"address":{"street":"123 Main St","zipCode":"10001"}}';

console.log(manualParse(jsonString));
console.log(JSON.parse(jsonString));
