const data = require('./LocationSeederData');
const countriesData = require('./countries.json');
const fs = require('fs');

const getCountries = () => {
  return data.map((country) => {
    return { countryId: country.id, name: country.name };
  });
};

const countries = getCountries();
console.log(countries);

fs.writeFile(
  'countries.json',
  JSON.stringify(countries),
  'utf8',
  (err, success) => {
    console.log('Err: ', err);
    console.log('Success: ', success);
  }
);

const getStates = () => {
  const states = [];
  data.forEach((country) => {
    country.states.forEach((state) => {
      states.push({
        countryId: country.id,
        stateId: state.id,
        name: state.name,
      });
    });
  });
  return states;
};

const states = getStates();

fs.writeFile('states.json', JSON.stringify(states), 'utf8', (err, success) => {
  console.log('Err: ', err);
  console.log('Success: ', success);
});

const getCities = () => {
  const cities = [];
  data.forEach((country) => {
    country.states.forEach((state) => {
      state.cities.forEach((city) => {
        cities.push({
          countryId: country.id,
          stateId: state.id,
          cityId: city.id,
          name: city.name,
        });
      });
    });
  });
  return cities;
};

const cities = getCities();

fs.writeFile('cities.json', JSON.stringify(cities), 'utf8', (err, success) => {
  console.log('Err: ', err);
  console.log('Success: ', success);
});
