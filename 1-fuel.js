import fs from 'fs';

const buffer = fs.readFileSync('./1_input.txt');
const moduleWeights = buffer.toString().trim().split('\r\n').map(Number);

const massToFuel = (mass) => Math.floor(mass / 3) - 2;
const calculateExtraFuel = (remainingFuel) => {
  const fuelRequired = massToFuel(remainingFuel);
  return fuelRequired <= 0 ? 0 : fuelRequired + calculateExtraFuel(fuelRequired);
}
const totalMassToFuel = (mass) => {
  const initialFuel = massToFuel(mass);
  const extraFuel = calculateExtraFuel(initialFuel);
  return initialFuel + extraFuel;
}

const test4 = totalMassToFuel(1969)

/* Fuel required for modules */
const fuelRequiredModules = moduleWeights
  .map(totalMassToFuel)
  .reduce((a, b) => a + b, 0);

console.log(fuelRequiredModules);