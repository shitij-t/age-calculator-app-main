const yearinput = document.querySelector("#year");
const monthinput = document.querySelector("#month");
const dayinput = document.querySelector("#day");

const yearError = document.querySelector("#yearError");
const monthError = document.querySelector("#monthError");
const dayError = document.querySelector("#dayError");

const daysMap = new Map([
  [0, 31],
  [1, 31],
  [2, 28],
  [3, 31],
  [4, 30],
  [5, 31],
  [6, 30],
  [7, 31],
  [8, 31],
  [9, 30],
  [10, 31],
  [11, 30],
  [12, 31],
]);

const ydis = document.querySelector("#yearsDisplay");
const mdis = document.querySelector("#monthsDisplay");
const ddis = document.querySelector("#daysDisplay");

function display(years, months, days) {
  ydis.innerHTML = years;
  mdis.innerHTML = months;
  ddis.innerHTML = days;
}

function reset() {
  ydis.innerHTML = "--";
  mdis.innerHTML = "--";
  ddis.innerHTML = "--";

  yearError.classList.add("invisible");
  dayError.classList.add("invisible");
  monthError.classList.add("invisible");

  //reset leap year days
  daysMap.set(2, 28);
}

function verifyInput() {
  reset();
  const year = parseInt(yearinput.value);
  const month = parseInt(monthinput.value);
  const day = parseInt(dayinput.value);

  // Verify Input
  //check for leap year
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) daysMap.set(2, 29);

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  //Show Error if any
  let er = false;
  if (year > currentYear) {
    yearError.classList.remove("invisible");
    er = true;
  }
  if (day < 1 || day > daysMap.get(month)) {
    dayError.classList.remove("invisible");
    er = true;
  }
  if (month < 1 || month > 12) {
    monthError.classList.remove("invisible");
    er = true;
  }

  if (er) return;

  //calculate year
  let yeardiff = currentYear - year;

  //calculate month
  let monthdiff = currentMonth - month;
  if (currentMonth < month) {
    yeardiff--;
    monthdiff += 12;
  }

  let daydiff = currentDay - day;
  if (day > currentDay) {
    monthdiff--;
    daydiff += daysMap.get(currentMonth - 1);
  }

  display(yeardiff, monthdiff, daydiff);
}
