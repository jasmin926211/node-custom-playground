const _ = require("lodash");

const user = {
  firstName: "Malay",
  lastName: "Malay",
  address: {
    street1: "221B",
    street2: "Baker's street",
  },
};

console.log(_.flatMap(user));