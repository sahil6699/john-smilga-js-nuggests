// * Filter -
// returns a new array, can manipulate the size of the new array(unlike map)
// returns based on condition

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

// filter
// if our condtion is true, then we return that item in the iteration, if the condn is not true then we don't return the item in the iteration
const youngPeople = people.filter((person) => {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age < 30;
});
console.log(youngPeople);
const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

// no match
// if none of the items match then you get the empty array
const seniorDevs = people.filter(
  (person) => person.position.toLowerCase() === 'Senior Dev'.toLowerCase()
);
console.log(seniorDevs);

// multiple matches - first match

// * find
// Find - returns a single instance(object), returns first match, if no match - undefined
const peter = people.find((person) => {
  console.log(person);
  // * returns a single objects which satisfies the condition
  // if not match then returns undefined is returned
  return person.name.toLowerCase() === 'peter'.toLowerCase();
});
console.log(peter);

//if we have strings it will not return object the string itself
const fruits = ['lemon', 'orange', 'kiwi'];
const lemon = fruits.find((fruit) => fruit === 'lemon');
console.log(lemon);

// no match - find
const peach = fruits.find((fruit) => fruit === 'peach');
console.log(peach);

// multiple matches - find
const randomPerson = people.find((person) => person.age < 35);
console.log('random person', randomPerson);

// diff between filter and find
// with filter even if it returns only a single object / string it will be still in a array
// but with find we have direct access to the value
const anna = people.filter((person) => person.name === 'anna');
console.log(peter.position);
console.log(anna[0].position);
