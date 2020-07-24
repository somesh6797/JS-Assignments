const student = {
  name: "Helenski",
  age: 24,
  projects: {
    diceGame: "Two player die game using JavaScript"
  }
};

const {
  name,
  age,
  projects: { diceGame }
} = student;
// const { diceGame } = projects;

console.log(`name is ${name} age is ${age} and done project is ${diceGame}`);
