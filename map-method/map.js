//Map method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 18,
    position: 'intern',
  },
];

// return a new array
// does't change the size of array (unlike filter)
// uses values from original array when making new one
// if we don't want to return the values we get from the original array, we still have access them i.e we can return anything from the  map method but the size of the array will remain the same
const getAges = (person) => person.age;
const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
console.log(names);
const result = document.querySelector('#result');
result.innerHTML = names.join('');
