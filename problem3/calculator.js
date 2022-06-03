
const kalkulator = (input) => {
  const [first, operator, second] = input.split(' ');
  // validate input not undefined
  if (!first || !operator || !second) {
    console.log('Invalid input')
    return;
  }

  firstOperand = parseFloat(first);
  secondOperand = parseFloat(second);


  if (firstOperand > 1000000 || secondOperand > 1000000) {
    console.log('Number is too large')
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      console.log('Invalid operator')
      return;
  }
  return result;
}