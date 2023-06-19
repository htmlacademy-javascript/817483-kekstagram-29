// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:

function stringLength(string, maxLength) {
  if(string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
stringLength('test', 20);

// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

function test(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
  }
  newString = newString.toLowerCase();
  const reverseString = newString.split('').reverse().join('');
  //console.log(reverseString);
  if (newString === reverseString) {
    return true;
  } else {
    return false;
  }
}
test(); // подошел к решению чуточку иначе (без регулярных выражений, с ними, конечно, полегче. хаха), но вроде работает


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:


function numbers(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(Number(string[i]))) {
      count++;
    }
  }
  return count === 0 ? NaN : parseInt(string.slice(0, count), 10); // не совсем уверен в работоспособности записи, вроде код раннере отрабатывает без ошибок. В данном случае в рамках тернарного оператора проверяем каунт на соответствие 0. Если 0, то NaN. Если больше нуля, то передаем все значение каунт после перебора в рамках цикла (проверяем на то, является ли числовым значением конкретный i в строке и увеличиваем значент каунт)
}

numbers('test213');
