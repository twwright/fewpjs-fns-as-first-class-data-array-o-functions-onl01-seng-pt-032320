let dog = `${dogName} the ${dogBreed}`;

wakeDog = (dogName, dogBreed) => console.log(`Wake ${dog}`);
leashDog = (dogName, dogBreed) => console.log(`Leash ${dog}`);
walkToPark = (dogName, dogBreed) => console.log(`Walk to the park with ${dog}`);
throwFrisbee = (dogName, dogBreed) => console.log(`Throw the frisbee for ${dog}`);
walkHome = (dogName, dogBreed) => console.log(`Walk home with ${dog}`);
unleashDog = (dogName, dogBreed) => console.log(`Unleash ${dog}`);

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

exerciseDog = (dogName, dogBreed) => {
  const executedRoutine = [];
  for (const action in array) {
    executedRoutine.push(action(dogName, dogBreed));
  }
  return executedRoutine;
}

