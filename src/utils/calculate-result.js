export const calculateResult = (prev, curr, operator) => {
  switch (operator) {
    case '+':
      return prev + curr;
    case '-':
      return prev - curr;
    case '*':
      return prev * curr;
    case '/':
      return prev / curr;
    case 'x-pow-y':
      return prev ** curr;
    case 'y-root-from-x':
      return prev ** (1 / curr);

    default:
      console.log('Error on calculate result');
  }
};
