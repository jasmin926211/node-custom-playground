const { update } = require("lodash");
const moment = require("moment");

console.log(moment("2022-03-17 12:03:05").startOf("isoweek")); // Monday
console.log(moment("2022-03-17 12:03:05").endOf("isoweek")); // Sunday

// const res = Table.findOne({
//   where: {
//     WeekStart: moment("2022-03-13 12:03:05").startOf("isoweek"),
//     driverId: 12,
//   },
// });

// res = data.id;

// update({ newcost }, { where: { id: data.id } });
