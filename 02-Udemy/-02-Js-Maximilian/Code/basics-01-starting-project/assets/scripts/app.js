const defaultResult = 11;
let currentResult = 11;
let logEntries = [];

function getUserNumberInput(){
  return parseInt(userInput.value)
}

function creteAndWriteoutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription)
}

function writeToLog(opertionIdentifire, prevResult, opertionNumber, newResult){
  const logEntry = {
    opertion:opertionIdentifire,
    prevResult: prevResult,
    number:opertionNumber,
    result: newResult

  };
  logEntries.push(logEntry);
  console.log(logEntry.opertion);
  console.log(logEntries);
}

function add(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  creteAndWriteoutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult ;
  currentResult -= enteredNumber;
  creteAndWriteoutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}
function multiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult ;
  currentResult *= enteredNumber;
  creteAndWriteoutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult ;
  currentResult /= enteredNumber;
  creteAndWriteoutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}



addBtn.addEventListener('click', add);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
subtractBtn.addEventListener('click', subtract);
