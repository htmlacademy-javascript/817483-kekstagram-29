// Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит. Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна. Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.
// Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.

const START_WORKING_TIME = '8:00';
const END_WORKING_TIME = '17:30';
const MEETING_START_TIME = '14:00';
const MEETING_TIME_SPENT = 90;

const changeTimeToMinutes = (time) => {
  let test = time.split(':').map(Number);
  let [hours, minutes] = test;
  let minutesPerHour = 60;
  return hours * minutesPerHour + minutes;
};
//changeTimeToMinutes();

/**
 * 
 * @param {string} startTime
 * @param {string} endTime
 * @param {string} startMeet
 * @param {string} timeSpent
 * @returns
 */
const getWorkingTime = (startTime, endTime, startMeet, timeSpent) => {
  //console.log(timeSpent)
  let param1 = changeTimeToMinutes(startTime);
  let param2 = changeTimeToMinutes(endTime);
  let param3 = changeTimeToMinutes(startMeet);
  console.log(param1, param2, param3);
  if((param3 - param2) < timeSpent) {
    return true;
  }
  return false;
};

let result = getWorkingTime(START_WORKING_TIME, END_WORKING_TIME, MEETING_START_TIME, MEETING_TIME_SPENT);
console.log(result);

// // Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:

// function stringLength(string, maxLength) {
//   if(string.length <= maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// }
// stringLength('test', 20);

// // Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

// function test(string) {
//   let newString = '';
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== ' ') {
//       newString += string[i];
//     }
//   }
//   newString = newString.toLowerCase();
//   const reverseString = newString.split('').reverse().join('');
//   //console.log(reverseString);
//   if (newString === reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// }
// test(); // подошел к решению чуточку иначе (без регулярных выражений, с ними, конечно, полегче. хаха), но вроде работает


// // Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:


// function numbers(string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (!isNaN(Number(string[i]))) {
//       count++;
//     }
//   }
//   return count === 0 ? NaN : parseInt(string.slice(0, count), 10); // не совсем уверен в работоспособности записи, вроде код раннере отрабатывает без ошибок. В данном случае в рамках тернарного оператора проверяем каунт на соответствие 0. Если 0, то NaN. Если больше нуля, то передаем все значение каунт после перебора в рамках цикла (проверяем на то, является ли числовым значением конкретный i в строке и увеличиваем значент каунт)
// }

// numbers('test213');
