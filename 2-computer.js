
const program1 = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,9,19,23,2,23,10,27,1,27,5,31,1,31,6,35,1,6,35,39,2,39,13,43,1,9,43,47,2,9,47,51,1,51,6,55,2,55,10,59,1,59,5,63,2,10,63,67,2,9,67,71,1,71,5,75,2,10,75,79,1,79,6,83,2,10,83,87,1,5,87,91,2,9,91,95,1,95,5,99,1,99,2,103,1,103,13,0,99,2,14,0,0];





const fetchNextInstruction = (program, programIndex) => {
  switch (program[programIndex]) {
    case 1:
    case 2:
      return [program.slice(programIndex, programIndex + 4), programIndex + 4];
    case 99:
      return [[99], -1];
    default:
      break;
  }
}

const executeProgram = (program) => {
  let instructionPointer = 0

  while (true) {
    const [currentInstruction, nextIndex] = fetchNextInstruction(program, instructionPointer);

    // console.log(currentInstruction);

    if(currentInstruction[0] === 99) {
      break;
    }

    instructionPointer = nextIndex;
    
    switch (currentInstruction[0]) {
      case 1:
        program[currentInstruction[3]] = program[currentInstruction[1]] + program[currentInstruction[2]];
        break;
      case 2:
        program[currentInstruction[3]] = program[currentInstruction[1]] * program[currentInstruction[2]];
      default:
        break;
    }
  }

}

// Exercise 1
// executeProgram(program1);
// console.log(program1.join(','));

// Just brute forcing the reverse 
//    ¯\_(ツ)_/¯
 
for (let i = 0; i < 999; i++) {
  for (let j = 0; j < 999; j++) {
    
    const newProgram = program1.slice();
    newProgram[1] = i;
    newProgram[2] = j;

    executeProgram(newProgram);

    if (newProgram[0] === 19690720) {
      console.log('\n\n\n');
      console.log(i)
      console.log(j)
      console.log(newProgram[0]);
      console.log('\n\n\n');
    }
    // if (newProgram[0] === 19690720) {
    // }
  }
}

