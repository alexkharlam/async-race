import { CAR_NAMES } from '../data/config.ts';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createCarName = () => {
  const firstIndex = getRandomInt(0, CAR_NAMES.FIRST.length - 1);
  const secondIndex = getRandomInt(0, CAR_NAMES.SECOND.length - 1);

  return `${CAR_NAMES.FIRST[firstIndex]} ${CAR_NAMES.SECOND[secondIndex]}`;
};

export default createCarName;
