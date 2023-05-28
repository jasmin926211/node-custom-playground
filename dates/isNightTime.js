const moment = require("moment");

let nightStartTime = "23:00",
  nightStart = moment(),
  nightStartTimeMoment = moment(nightStartTime, "HH:mm");

nightStart.set({
  hour: nightStartTimeMoment.get("hour"),
  minute: nightStartTimeMoment.get("minute"),
  second: nightStartTimeMoment.get("second"),
});

const nightEnd = nightStart.clone().add(7, "h");

console.log(nightStart);
console.log(nightEnd);

const currentTime = moment();

console.log(currentTime.isBetween(nightStart, nightEnd));
