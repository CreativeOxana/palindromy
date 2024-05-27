// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

// const textPozpatku = (text) => {
//   return text.split('').reverse().join('');
// };

const textList = document.querySelectorAll('li');

textList.forEach((item) => {
  const text = item.textContent.toLowerCase().replace(/ /g, '');
  if (text === text.split('').reverse().join('')) {
    item.classList.add('palindrom');
  }
});
