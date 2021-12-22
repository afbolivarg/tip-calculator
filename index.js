const currency = Intl.NumberFormat('en-US');

const billInput = document.getElementById('bill-value');
const tipInput = document.getElementById('tip-value');
const peopleInput = document.getElementById('people-value');
const tipResult = document.getElementById('tip-per-person');
const totalResult = document.getElementById('total-per-person');
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset-button');

function getBill() {
  return parseInt(billInput.value);
}

function getPercentage() {
  return parseInt(tipInput.value);
}

function getPeople() {
  return parseInt(peopleInput.value);
}

function calculateTip() {
  let billAmount = getBill();
  let tipPercentage = getPercentage();
  let numberOfPeople = getPeople();
  
  let tipAmount = billAmount * (tipPercentage / 100);
  let billWithTip = billAmount + tipAmount;

  let tipPerPerson = (tipAmount / numberOfPeople).toFixed(2);
  let totalPerPerson = (billWithTip / numberOfPeople).toFixed(2);

  tipResult.innerText = `$${currency.format(tipPerPerson)}`;
  totalResult.innerText = `$${currency.format(totalPerPerson)}`;
}

function reset() {
  billInput.value = null;
  tipInput.value = null;
  peopleInput.value = null;

  tipResult.innerText = '$0.00';
  totalResult.innerText = '$0.00';  
}

calculateBtn.addEventListener('click', calculateTip);
resetBtn.addEventListener('click', reset);