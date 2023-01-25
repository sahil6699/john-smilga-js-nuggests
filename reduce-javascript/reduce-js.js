//Reduce
//iterates, callback function
// reduces to single value : number, array, object
// 1st parameter ("acc") - total of all calculations
// 2nd parameter ("curr") - current iteration/value
// it also takes and initial value after a callback

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];
// here total represents the accumulator and person is the current item
const dailyTotal = staff.reduce((total, person) => {
  console.log(`${total} : ${person.salary}`);

  total += person.salary;

  // ! it is really important to always return the total (accumulator)
  return total;
}, 1000);
console.log(dailyTotal);
