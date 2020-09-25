let dog = `${dogName} the ${dogBreed}`;

const wakeDog = (dogName, dogBreed) => console.log(`Wake ${dog}`);
const leashDog = (dogName, dogBreed) => console.log(`Leash ${dog}`);
const walkToPark = (dogName, dogBreed) => console.log(`Walk to the park with ${dog}`);
const throwFrisbee = (dogName, dogBreed) => console.log(`Throw the frisbee for ${dog}`);
const walkHome = (dogName, dogBreed) => console.log(`Walk home with ${dog}`);
const unleashDog = (dogName, dogBreed) => console.log(`Unleash ${dog}`);

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

const exerciseDog = (dogName, dogBreed) => {
  return routine.map(action => action(dogName, dogBreed))
}