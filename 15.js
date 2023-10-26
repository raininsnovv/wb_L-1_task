function getRandomNumber() {
    return new Promise(resolve =>
      setTimeout(() => resolve(Math.floor(Math.random() * 100)), 1000)
    );
  }
  
  async function asyncExample() {
    try {
      console.log("Start");
  
      const num1Promise = getRandomNumber();
      const num1 = await num1Promise;
      console.log(`Random number 1: ${num1}`);
  
      const num2Promise = getRandomNumber();
      const num2 = await num2Promise;
      console.log(`Random number 2: ${num2}`);
  
      await new Promise(resolve => setTimeout(resolve, 1000)); // Задержка в 1 секунду
  
      const sum = num1 + num2;
      return sum;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  asyncExample().then(result => console.log("Result:", result));
  