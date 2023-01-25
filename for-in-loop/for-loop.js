const object = {
  fname: 'sahil',
  lname: 'aneja',
  age: 24,
  height: '5"11',
  weight: 70,
};

// for in loop
// can be used to iterate over the prop of a object
// it also iterate over the the values of the object by using the following syntax: object[objectProperty]
for (let objectProperty in object) {
  console.log(`${objectProperty}: ${object[objectProperty]}`);
  console.log(`${object.objectProperty}`); //this will be undefined why?
  // ! doubt: the above one will be undefined why
}
