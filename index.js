//Написати функцію checkValueInArray, яка приймає масив чисел і ключ(число), і повертає булеве значеня залежно від того чи присутній в масиві ключ.
const array = [1, 2, 3];
const key = 1;
const checkValueInArray = function (array, arg) {
  for (let index = 0; index < array.length; index++) {
    if (array.includes(arg)) {
      return true;
    }
    return false;
  }
};
console.log(checkValueInArray(array,key));
