function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  
  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }
  
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  
  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
  
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
  }
  
  function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  