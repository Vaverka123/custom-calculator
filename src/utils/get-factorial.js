export const getFactorial = (number) => {
  if (number < 0) return 'n/a: factorial of negative number';
  if (number === 0 || number === 1) return 1;

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};
