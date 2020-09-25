wakeDog = function(dogName, dogBreed) { 
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Wake ${dog}`);
  return `Wake ${dog}`;
};

leashDog = function(dogName, dogBreed) {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Leash ${dog}`);
  return `Unleash ${dog}`;
};

walkToPark = function(dogName, dogBreed) {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Walk to the park with ${dog}`);
  return `Walk to the park with ${dog}`;
};
  
  
throwFrisbee = function(dogName, dogBreed) {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Throw the frisbee for ${dog}`);
  return `Throw the frisbee for ${dog}`;
};

walkHome = function(dogName, dogBreed) {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Walk home with ${dog}`);
  return `Walk home with ${dog}`;
};

unleashDog = function(dogName, dogBreed) {
  let dog = `${dogName} the ${dogBreed}`;
  console.log(`Unleash ${dog}`);
  return `Unleash ${dog}`;
};

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

const exerciseDog = function(dogName, dogBreed) {
  return routine.map(action => action(dogName, dogBreed));
};