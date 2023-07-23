//Написати функцію checkValueInArray, яка приймає масив чисел і ключ(число), і повертає булеве значеня залежно від того чи присутній в масиві ключ.
// const array = [1, 2, 3];
// const key = 3;
// const checkValueInArray = function (array, arg) {
//   for (let index = 0; index < array.length; index++) {
//     if (array.includes(arg)) {
//       return true;
//     }
//     return false;
//   }
// };
// console.log(checkValueInArray(array, key));

//*Написати функцію, яка приймає масив з числами і повертає true, якщо в масиві є два однакових числа поспіль, інакше повертає false. Якщо масив порожній також повертає false.

const array1 = [1, 2, 3, 4, 5, 5, 6];

const checkDuplNumbers = function (array) {
  for (let index = 0; index < array.length; index++) {
    if (array.at(index) === array.at(index + 1)) {
      return true;
    }
  }
  return false;
};
console.log(checkDuplNumbers(array1));
