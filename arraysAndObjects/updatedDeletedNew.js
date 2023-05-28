const _ = require("lodash");

const inputArray = [
  { id: 123, name: "abc" },
  { id: 234, name: "bcd" },
];

const existingArray = [
  { id: 123, name: "abc" },
  { id: 456, name: "pqr" },
];

const newItems = _.differenceBy(inputArray, existingArray, "id");
console.log("newItems ", newItems);

const deletedItems = _.differenceBy(existingArray, inputArray, "id");
console.log("deletedItems ", deletedItems);
