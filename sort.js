const organizersList = [
  {
    country: 'IN',
    phoneCountryCode: '+91',
    phoneNumber: '7046460053',
    role: 'ORGANIZER',
  },
  {
    country: 'IN',
    phoneCountryCode: '+91',
    phoneNumber: '7046460054',
    role: 'MANAGER',
  },
];

const data = organizersList.find((organizer) => organizer.role === 'ORGANIZER');

console.log(data);
