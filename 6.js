const functionArray = [
    () => {console.log('1'), callNextFunction(1)},
    () => {console.log('2'), callNextFunction(2)},
    () => {console.log('3'), callNextFunction(3)},
];

// создаеи функцию для вызова следующей функции в массиве
function callNextFunction(index) {
    debugger
    if (index < functionArray.length) {
        const nextFunction = functionArray[index];
        nextFunction();
    }
}

// начинаем вызывать функции, начиная с первой
callNextFunction(0);