import carNames from '../data/carNames.ts';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createCarName = () => {
  const firstIndex = getRandomInt(0, carNames[0].length - 1);
  const secondIndex = getRandomInt(0, carNames[1].length - 1);

  return `${carNames[0][firstIndex]} ${carNames[1][secondIndex]}`;
};

export default createCarName;
