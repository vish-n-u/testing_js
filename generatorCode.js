function * generatorFunction(num) { // Line 1
    sum =num;
    num = num**3
    yield ;   // Line 2
    console.log('I will be printed after the pause');  
    yield sum**3;
    yield 'woah'
  }
  const generatorObject = generatorFunction(5); // Line 3
 console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6