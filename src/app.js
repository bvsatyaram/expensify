import canDrink, {isAdult} from './utils';

[17, 18, 19, 20, 21, 22].forEach((age) => {
  console.log(`${age} year old is an adult: ${isAdult(age)}`);
  console.log(`${age} year old can drink: ${canDrink(age)}`);
})