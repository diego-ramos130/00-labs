var replaceDots = function (str) {
  var strBreak = str.split('');
  var trueStr = '';
  for (let i = 0; i < strBreak.length; i++) {
    if (strBreak[i] === '.') {
      trueStr += '-';
    } else {
      trueStr += strBreak[i];
    }
  }
  return trueStr;
}