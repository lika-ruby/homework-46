console.log("--------------------------- Task 1 ---------------------------");

const marks = [8, 5, 12];
console.log(marks);

marks[1] = 10;
console.log(marks);

console.log("--------------------------- Task 2 ---------------------------");

const seasons = ["winter", "spring", "summer"];
console.log(seasons);

seasons[3] = "autumn";
console.log(seasons);

console.log("--------------------------- Task 3 ---------------------------");

const salaries = [12000, 15500, 10000, 13750, 18000, 14600];
let totalSalary = 0;

for (let salary of salaries) {
  totalSalary += salary;
}
console.log(totalSalary);

console.log("--------------------------- Task 4 ---------------------------");

const moneyFromCharaty = [50000, 85000, 60000, 35000, 95000];

for (let i = 0; i < moneyFromCharaty.length; i++) {
  console.log(moneyFromCharaty[i]);
}

console.log("--------------------------- Task 5 ---------------------------");

const animals = ["elefant", "lion", "zebra", "crocodile", "monkey"];

for (let animal of animals) {
  if (animal.length > 5) {
    console.log(animal);
  }
}

console.log("--------------------------- Task 6 ---------------------------");

const bidsAtAuction = [40, 75, 32, 70, 81, 59, 117, 67, 94, 106];
let maxBid = 0;

for (let bid of bidsAtAuction) {
  if (bid > maxBid) {
    maxBid = bid;
  }
}
console.log(maxBid);

console.log("--------------------------- Task 7 ---------------------------");

const numbers = [5, 8, 7, 21, 12, 6, 44, 73, 55, 68];
let enenNumbers = 0;

for (let number of numbers) {
  if (number % 2 === 0) {
    enenNumbers += `${number}, `;
  }
}

console.log(enenNumbers);
