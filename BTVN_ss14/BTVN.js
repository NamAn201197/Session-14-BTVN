/* BT-1 */

// document.write(
//   ` <li>List item number 1</li>
//     <li>List item number 2</li>
//     <li>List item number 3</li>`
// );

// /* BT-2 */

// function myButton() {
//   alert(`Hello!`);
// }

/* BT-3 */
// function changeText() {
//   document.getElementById("text").innerHTML = "Second text";
// }

/* BT-4 */
// function newColor() {
//   document.getElementById("text").style.backgroundColor = "yellow";
//   document.getElementById("text").style.color = "red";
// }

/* BT-5 */
/*  Phân tích đề:
        b1: tạo mảng
        b2: tạo thẻ ul trên html và gọi thẻ ul
        b3: duyệt mảng
        b4: tạo thẻ li (.createElement("li"))
        b5: gán nội dung từ mảng vào thẻ li (.textContent)
        b5: thêm li vào thẻ ul (.appendChild(li))
*/

// let arr = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

// function List() {
//   let listName = document.getElementById("listName");
//   for (let i = 0; i < arr.length; i++) {
//     let create = document.createElement("li");
//     create.textContent = arr[i];
//     listName.appendChild(create);
//   }
// }
// List();

/* BT-6 */
/* Phân tích đề
        b1: tạo mảng rỗng chứa dữ liệu ng nhập
        b2: tạo hàm để push thông tin ng nhập vào mảng rổng
        b3: tạo thẻ li và thêm vào thẻ ul
*/
// let arr = [];
// let input = document.getElementById("inputItem");

// function addItem() {
//   if (input !== "") {
//     arr.push(input);
//     let li = document.createElement("li");
//     li.textContent = input.value;
//     listItem.appendChild(li);
//   }
// }

/* BT-7 */

function addRow() {
  let table = document.getElementsByTagName("table")[0];
  let addTr = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    let td = document.createElement("td");
    td.textContent = `cell ${i + 1} row `; // làm sao để đếm row
    addTr.appendChild(td);
  }
  table.appendChild(addTr);
}

/* BT-8 */
/*
        gọi thẻ cha (.parentNode)
        nguồn: https://freetuts.net/
*/
function dele() {
  let btn = document.getElementById("button");
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
