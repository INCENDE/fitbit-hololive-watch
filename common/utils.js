export function zeroPad(i) {
  return i < 10 ? "0" + i : i;
}

const mapDayOfWeek = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
}

export function dayOfWeek(i) {
  return mapDayOfWeek[i];
}

const mapNameOfMonth = {
  0: "JAN",
  1: "FEB",
  2: "MAR",
  3: "APR",
  4: "MAY",
  5: "JUN",
  6: "JUL",
  7: "AUG",
  8: "SEP",
  9: "OCT",
  10: "NOV",
  11: "DEC",
}

export function nameOfMonth(i) {
  return mapNameOfMonth[i];
}