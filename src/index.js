module.exports = function toReadable (number) {
    if (number >= 0 && number < 20) {
        return toTen(number);
    }
    number = number.toString();
    if (number[0] == 2 && number.length == 2) {
        ret = ('twenty ' + toTen(Number(number[number.length-1])));//23
    }
    if (number[0] == 3 && number.length == 2) {
        ret = ('thirty ' + toTen(Number(number[number.length-1])));//38
    }
    if (number[0] == 4 && number.length == 2) {
        ret = ('forty ' + toTen(Number(number[number.length-1])));
    }
    if (number[0] == 5 && number.length == 2) {
        ret = ('fifty ' + toTen(Number(number[number.length-1])));
    }
    if (number[0] == 6 && number.length == 2) {
        ret = ('sixty ' + toTen(Number(number[number.length-1])));
    }
    if (number[0] == 7 && number.length == 2) {
        ret = ('seventy ' + toTen(Number(number[number.length-1])));
    }
    if (number[0] == 8 && number.length == 2) {
        ret = ('eighty ' + toTen(Number(number[number.length-1])));
    }
    if (number[0] == 9 && number.length == 2) {
        ret = ('ninety ' + toTen(Number(number[number.length-1])));
    }
    if (number.length == 3 && number[1] != 0) {
        ret = (toTen(Number(number[0])) + ' hundred ' + toReadable(number[1] + number[2]));
    }
     if (number.length == 3 && number[1] == 0) {
        ret = (toTen(Number(number[0])) + ' hundred ' + toTen(Number(number[number.length-1]))); //605
    }
     if (number.length == 3 && (number[1] + number[2]) < 20 && (number[1] + number[2]) > 9) {
         let teen = Number(number[1] + number[2]);
        ret = (toTen(Number(number[0])) + ' hundred ' + toTen(teen)); //213
    }
   return deleteZero(ret);
}

function toTen(number) {
      if (number === 0) {
        return 'zero';
    }
      if (number === 1) {
        return 'one';
    }
      if (number === 2) {
        return 'two';
    }
      if (number === 3) {
        return 'three';
    }
      if (number === 4) {
        return 'four';
    }
      if (number === 5) {
        return 'five';
    }
      if (number === 6) {
        return 'six';
    }
      if (number === 7) {
        return 'seven';
    }
      if (number === 8) {
        return 'eight';
    }
      if (number === 9) {
        return 'nine';
    }
      if (number === 10) {
        return 'ten';
    }
      if (number == 11) {
        return 'eleven';
    }
      if (number == 12) {
        return 'twelve';
    }
      if (number == 13) {
        return 'thirteen';
    }
      if (number == 14) {
        return 'fourteen';
    }
      if (number == 15) {
        return 'fifteen';
    }
      if (number == 16) {
        return 'sixteen';
    }
      if (number == 17) {
        return 'seventeen';
    }
      if (number == 18) {
        return 'eighteen';
    }
      if (number == 19) {
        return 'nineteen';
    }
}

function deleteZero (ret) {
    let exp = ret.split(' ') 
    if (exp[exp.length - 1] == 'zero' && exp.length > 0) {
        let popped = exp.pop();
        let ret = exp.toString();
        return ret.split(',').join(' ');
    }
        return ret;
}
