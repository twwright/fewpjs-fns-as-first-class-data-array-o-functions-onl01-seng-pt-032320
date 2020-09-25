wakeDog = (dogName, dogBreed) => { 
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Wake ${dog}`);
  return `Wake ${dog}`;
}

leashDog = (dogName, dogBreed) => {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Leash ${dog}`);
  return `Unleash ${dog}`;
}

walkToPark = (dogName, dogBreed) => {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Walk to the park with ${dog}`);
  return `Walk to the park with ${dog}`;
}
  
  
throwFrisbee = (dogName, dogBreed) => {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Throw the frisbee for ${dog}`);
  return `Throw the frisbee for ${dog}`;
}

walkHome = (dogName, dogBreed) => {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Walk home with ${dog}`);
  return `Walk home with ${dog}`;
}

unleashDog = (dogName, dogBreed) => {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Unleash ${dog}`);
  return `Unleash ${dog}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

const exerciseDog = (dogName, dogBreed) => {
  return routine.map(action => action(dogName, dogBreed))
}