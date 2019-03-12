const addTwoNumbersInArray = function(l1, l2) {
  const number1 = parseInt(l1.toString().replace(/,/g, ''));
  const number2 = parseInt(l2.toString().replace(/,/g, ''));
  const number3 = number1 + number2;
  const string3 = number3.toString();
  let array = [];
  for(let i = string3.length - 1; i >= 0; i--) {
    array.push(Number(string3[i]));
  }

  return array;
};

export default addTwoNumbersInArray;
