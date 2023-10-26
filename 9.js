function manualStringify(input) {
  if (typeof input === "string") {
    return `"${input}"`;
  }
  if (typeof input === "number") {
    return String(input);
  }

  if (Array.isArray(input)) {
    const arrayContent = input.map((item) => manualStringify(item)).join(",");
    return `[${arrayContent}]`;
  }

  if (typeof input === "object") {
    const objectContent = Object.entries(input)
      .map(([key, value]) => `"${key}":${manualStringify(value)}`)
      .join(",");
    return `{${objectContent}}`;
  }

  return undefined; 
}

const input = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "traveling"]
};

console.log(manualStringify(input)); 

console.log(JSON.stringify(input));
