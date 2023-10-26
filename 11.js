function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Счетчик: ${count}`);
  }

  function decrement() {
    count--;
    console.log(`Счетчик: ${count}`);
  }

  return {
    increment,
    decrement,
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
