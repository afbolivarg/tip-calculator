const currency = Intl.NumberFormat('en-US');

const billInput = document.getElementById('bill-value');
const tipInput = document.getElementById('tip-value');
const peopleInput = document.getElementById('people-value');
const tipResult = document.getElementById('tip-per-person');
const totalResult = document.getElementById('total-per-person');
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset-button');
const billBox = document.getElementById('bill-box');
const percentageBox = document.getElementById('percentage-box');
const peopleBox = document.getElementById('people-box');

function getBill() {
  return parseInt(billInput.value);
}

function getPercentage() {
  return parseInt(tipInput.value);
}

function getPeople() {
  return parseInt(peopleInput.value);
}

function required(bill, tip, people) {
  if (Number.isNaN(bill)) {
    billBox.style.cssText += 'border:1px #995753 solid';
  }
  if (Number.isNaN(tip)) {
    percentageBox.style.cssText += 'border:1px #995753 solid'; 
  }
  if (Number.isNaN(people)) {
    peopleBox.style.cssText += 'border:1px #995753 solid'; 
  }
  return console.log('Valor requerido');
}

function calculateTip() {
  let billAmount = getBill();
  let tipPercentage = getPercentage();
  let numberOfPeople = getPeople();

  if (Number.isNaN(billAmount) ||
    Number.isNaN(tipPercentage) ||
    Number.isNaN(numberOfPeople)) {
    return required(billAmount, tipPercentage, numberOfPeople);
  }
  
  billBox.style.cssText += 'border:none';
  percentageBox.style.cssText += 'border:none';
  peopleBox.style.cssText += 'border:none';

  console.log(Number.isNaN(billAmount, tipPercentage, numberOfPeople));
  
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