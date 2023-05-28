const driverDetails = {
  vehicles: {
    id: 123,
    vehicleNumber: 83921,
  },
};
console.log(driverDetails["vehicles.id"]);
console.log(driverDetails["vehicles.vehicleNumber"]);

console.log(driverDetails["vehicles"]["id"]);
console.log(driverDetails["vehicles"]["vehicleNumber"]);
