function calcStackSize() {
  let stackSize = 0;

  function recurse() {
    stackSize++;
    recurse();
  }

  try {
    recurse();
  } catch (error) {
    console.log("Размер стека вызовов:", stackSize);
  }
}

calcStackSize();
