// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// console.log(1 > 0); // true
// console.log(0 > 0); // false
// console.log(-3 > 0); // false

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// value = "test";
// console.log(value === "test"); // true
// console.log(value === 'test'); // true
// console.log(value === "qwerty"); // false
// console.log(value === true); // false

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const a = 1;
// if (a > 10) {
//   console.log(a - 5);
// } else {
//   console.log(a + 5); // 6
// }

// const b = 10;
// if (b > 10) {
//   console.log(b - 5);
// } else {
//   console.log(b + 5); // 15
// }

// const c = 13;
// if (c > 10) {
//   console.log(c - 5); // 8
// } else {
//   console.log(c + 5);
// }

// const d = prompt("Введіть число");
// const f = Number(d);
// if (f > 10) {
//   console.log(f - 5);
// } else {
//   console.log(f + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const monthnum = prompt("Введіть номер місяця");
// let monthname;
// switch (monthnum) {
//   case "1":
//     monthname = "січень";
//     alert(monthname);
//     break;
//   case "2":
//     monthname = "лютий";
//     alert(monthname);
//     break;
//   case "3":
//     monthname = "березень";
//     alert(monthname);
//     break;
//   case "4":
//     monthname = "квітень";
//     alert(monthname);
//     break;
//   case "5":
//     monthname = "травень";
//     alert(monthname);
//     break;
//   case "6":
//     monthname = "червень";
//     alert(monthname);
//     break;
//   case "7":
//     monthname = "липень";
//     alert(monthname);
//     break;
//   case "8":
//     monthname = "серпень";
//     alert(monthname);
//     break;
//   case "9":
//     monthname = "вересень";
//     alert(monthname);
//     break;
//   case "10":
//     1;
//     monthname = "жовтень";
//     alert(monthname);
//     break;
//   case "11":
//     monthname = "листопад";
//     alert(monthname);
//     break;
//   case "12":
//     monthname = "грудень";
//     alert(monthname);
//     break;
//   default:
//     alert("Їх всього 12");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const a = prompt("Введіть тризначне число та отримай їх сумму");
// if (a <= 99 || a >= 1000) {
//   alert("Треба тризначне число");
// } else {
//   const b = Number(a[0]);
//   const c = Number(a[1]);
//   const d = Number(a[2]);
//   alert(b + c + d);
// }
