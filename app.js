const formEl = document.querySelector('form');
const outputEl = document.querySelector('#output');
const inputEl = document.querySelector('#input');
const switchEl = document.querySelector('.switch');
const title = document.querySelector('.title');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.input.value;
  const inputType = e.target.input.getAttribute('data-type');

  convert(inputType, inputValue);
});

function convert(type, inputValue) {
  let output = '';
  if (type === 'binary') {
    output = binaryToText(inputValue);
  }
  outputEl.innerText = output;
}

function binaryToText(input) {
  let output = '';
  output = input
    .split(' ')
    .map((number) => parseInt(number, 2))
    .map((number) => String.fromCharCode(number))
    .join('');

  return output;
}
