// creating an object
const person = {
  id: 123,
  firstName: "cristian",
  lastName: "penarrieta",
  age: 35,
  email: "c.penarrieta@northeastern.edu",
  "weird-key+": "weird value",
  kids: [
    {
      name: "clara",
      age: 4,
    },
    {
      name: "Francisco",
      age: 1,
    },
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// accessing object values
console.log("1 ========== ========== =========");
console.log(person.firstName);
console.log(person["weird-key+"]);
console.log(person.kids);
console.log(person.kids[0].name);
console.log(person.kids[1].name);
console.log(person.getFullName());

// updating values
console.log("2 ========== ========== =========");
person.age = 40;
console.log(person.age);

// // creating new fields after object creation
// console.log("3 ========== ========== =========");
person.location = "Vancouver";
console.log(person.location);

// // creates an object based on the fields from another object
// console.log("4 ========== ========== =========");
const person2 = { ...person, firstName: "Rui", lastName: "Wang" };
console.log(person.firstName);
console.log(person.kids);
console.log(person.email);


// // More info on this
// // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics