const assignedVehicles = [
  {
    id: 123,
    name: "abc",
    isActive: false,
  },
  {
    id: 124,
    name: "pqr",
    isActive: false,
  },
  {
    id: 125,
    name: "xyz",
    isActive: false,
  },
];

const assignedActiveVehicles = [
  {
    id: 124,
    name: "pqr",
    isActive: true,
  },
];

const vehiclesList = assignedVehicles.map((assignedVehicle) => {
  return {
    ...assignedVehicle,
    isAvailable: !assignedActiveVehicles
      .map((assignedActiveVehicle) => assignedActiveVehicle.id)
      .includes(assignedVehicle.id),
  };
});

console.log(vehiclesList);