function writeCards(nameArr, giftType) {
  let thanksArr = [];
  nameArr.forEach((name) => {
    thanksArr.push(`Thank you, ${name}, for the wonderful ${giftType} gift!`);
  });
  return thanksArr;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
