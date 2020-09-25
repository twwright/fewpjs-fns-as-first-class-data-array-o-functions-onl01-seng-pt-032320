let dog = `${dogName} the ${dogBreed}`;

wakeDog = (dogName, dogBreed) => console.log(`Wake ${dog}`);
walkToPark = (dogName, dogBreed) => console.log(`Walk to the park with ${dog}`);
throwFrisbee = (dogName, dogBreed) => console.log(`Throw the frisbee for ${dog}`);
walkHome = (dogName, dogBreed) => console.log(`Walk home with ${dog}`);
unleashDog = (dogName, dogBreed) => {
  console.log(`Unleash ${dog}`);
  return `Unleash ${dog}`

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

const exerciseDog = (dogName, dogBreed) => {
  return routine.map(action => action(dogName, dogBreed))
}