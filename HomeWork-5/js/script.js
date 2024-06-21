// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const infoStudent = {
//   name: "Alex",
//   speciality: "developer",
//   gpa: "10.5",
//   showInfo: function (absense) {
//     console.log("Name: " + this.name),
//       console.log("Speciality: " + this.speciality),
//       console.log("GPA: " + this.gpa),
//       console.log("Absense: " + absense);
//   },
// };

// const Serg = {
//   name: "Serg",
//   speciality: "Designer WEB",
//   gpa: "11",
// };

// const Oleg = {
//   name: "Oleg",
//   speciality: "Data Analytics",
//   gpa: "9.8",
// };

// const Anna = {
//   name: "Anna",
//   speciality: "QA Engineer",
//   gpa: "11.8",
// };

// infoStudent.showInfo.call(Serg, 5);
// infoStudent.showInfo.apply(Oleg, [7]);
// infoStudent.showInfo.bind(Anna, 2)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const definition = {
//   showText() {
//     console.log("Визначеня: ", this.text);
//   },
// };

// const htmltext = {
//   text: "HTML - це мова, якою спілкується браузер.",
// };

// const csstext = {
//   text: "CSS - це мова стилів, яка описує вигляд документів, написаних на HTML",
// };

// document
//   .querySelector("#html")
//   .addEventListener("click", definition.showText.bind(htmltext));

// document
//   .querySelector("#css")
//   .addEventListener("click", definition.showText.bind(csstext));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const shop = {
//   product: "Melon",
//   price: 60,
//   calcCost: function (weight) {
//     let cost = this.price * weight;
//     let costRound = Math.round(cost * 100) / 100;
//     console.log("product: " + this.product),
//       console.log("for pay: " + costRound);
//   },
// };

// const banana = {
//   product: "Banana",
//   price: 30,
// };

// const cherry = {
//   product: "Cherry",
//   price: 58,
// };

// const orange = {
//   product: "Orange",
//   price: 89,
// };

// shop.calcCost.call(banana, 4.5);
// shop.calcCost.call(cherry, 1.3);
// shop.calcCost.call(orange, 3.4);
