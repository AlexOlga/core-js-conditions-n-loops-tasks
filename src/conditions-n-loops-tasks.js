/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const buf = a > b ? a : b;
  return buf > c ? buf : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return a === b || b === c || c === a;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let dubleNum = num;
  const units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let result = '';
  while (dubleNum > 9) {
    result += 'X';
    dubleNum -= 10;
  }
  return `${result}${units[dubleNum]}`;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberSt) {
  let result = '';
  for (let i = 0; i < numberSt.length; i += 1) {
    switch (numberSt[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      default:
        result += '';
        break;
    }
    if (i !== numberSt.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = true;
  let index = 0;
  let lastIndex = str.length - 1;
  while (result && index < lastIndex) {
    if (str[index] !== str[lastIndex]) {
      result = false;
    }
    index += 1;
    lastIndex -= 1;
  }
  return result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let i = 0;
  let index = -1;
  while (index < 0 && i < str.length) {
    if (str[i] === letter) {
      index = i;
    }
    i += 1;
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  return getIndexOf(`${num}`, `${digit}`) !== -1;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let totalSum = 0;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    const rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let counter = 1;
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result[i] = [];
    for (let j = 0; j < size; j += 1) {
      result[i][j] = 0;
    }
  }
  let top = -1;
  let rigth = size;
  let left = -1;
  let bottom = size;

  while (counter <= size * size) {
    for (let i = left + 1; i < rigth; i += 1) {
      result[left + 1][i] = counter;
      counter += 1;
    }
    top += 1;
    rigth -= 1;
    for (let i = top + 1; i < bottom; i += 1) {
      result[i][rigth] = counter;
      counter += 1;
    }
    bottom -= 1;

    for (let i = rigth - 1; i > left; i -= 1) {
      result[bottom][i] = counter;
      counter += 1;
    }
    left += 1;
    for (let i = bottom - 1; i > top; i -= 1) {
      result[i][left] = counter;
      counter += 1;
    }
  }

  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]
 *   

 */
function rotateMatrix(matrix) {
  const copyMatrix = matrix;
  const rows = matrix.length;
  const columns = matrix[0].length;
  for (let i = 0; i < rows; i += 1) {
    for (let j = i + 1; j < columns; j += 1) {
      const buff = copyMatrix[i][j];
      copyMatrix[i][j] = copyMatrix[j][i];
      copyMatrix[j][i] = buff;
    }
  }

  for (let i = 0; i < columns; i += 1) {
    for (let j = 0; j < Math.floor(rows / 2); j += 1) {
      const buff = copyMatrix[i][j];
      copyMatrix[i][j] = copyMatrix[i][rows - 1 - j];
      copyMatrix[i][rows - 1 - j] = buff;
    }
  }
  return copyMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const copyArr = arr;
  if (copyArr.length < 2) return arr;
  const pivot = copyArr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < copyArr.length; i += 1) {
    if (pivot > copyArr[i]) {
      left[left.length] = copyArr[i];
    } else {
      right[right.length] = copyArr[i];
    }
  }
  const newArr = [...sortByAsc(left), pivot, ...sortByAsc(right)];
  for (let i = 0; i < newArr.length; i += 1) {
    copyArr[i] = newArr[i];
  }

  return copyArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, iterations) {
  if (iterations === 0) {
    return str;
  }
  const size = str.length;
  let newString = str;

  for (let i = 0; i < iterations; i += 1) {
    let odd = '';
    let even = '';

    for (let j = 0; j < size; j += 1) {
      if (j % 2 === 0) {
        even += newString[j];
      } else {
        odd += newString[j];
      }
    }

    newString = even + odd;
    if (newString === str) {
      const itr = (iterations - i - 1) % (i + 1);
      newString = str;
      for (let k = 0; k < itr; k += 1) {
        odd = '';
        even = '';

        for (let j = 0; j < size; j += 1) {
          if (j % 2 === 0) {
            even += newString[j];
          } else {
            odd += newString[j];
          }
        }
        newString = even + odd;
      }
      return newString;
    }
  }

  return newString;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;

  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  digits.reverse();
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) return number;
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }
  const buff = digits[i];
  digits[i] = digits[j];
  digits[j] = buff;
  const left = digits.slice(0, i + 1);
  const right = digits.slice(i + 1).sort((a, b) => a - b);
  const resultDigits = [...left, ...right];
  return resultDigits.reduce((acc, digit) => acc * 10 + digit, 0);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
