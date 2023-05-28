const moment = require("moment");

let dayStartTime = "6:00",
  dayStart = moment(),
  dayStartMoment = moment(dayStartTime, "HH:mm");

dayStart.set({
  hour: dayStartMoment.get("hour"),
  minute: dayStartMoment.get("minute"),
  second: dayStartMoment.get("second"),
});

let dayEndTime = "23:00",
  dayEnd = moment(),
  dayEndMoment = moment(dayEndTime, "HH:mm");

dayEnd.set({
  hour: dayEndMoment.get("hour"),
  minute: dayEndMoment.get("minute"),
  second: dayEndMoment.get("second"),
});

const currentTime = moment();

console.log(currentTime.isBetween(dayStart, dayEnd));
