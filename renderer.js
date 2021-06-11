function plusItem() {
  if (
    document.getElementById("productTable").getElementsByTagName("tbody")
      .length == 0
  ) {
    document.getElementById("productTable").innerHTML += "<tbody></tbody>";
  }
  document
    .getElementById("productTable")
    .getElementsByTagName("tbody")[0].innerHTML +=
    "<tr>" +
    "<td><input type='text' id='value' name='value'></td>" +
    "<td><input type='text' id='label' name='label'></td>" +
    "<td><button onclick='minusItem(this)'>-</button></td>" +
    "</tr>";
  event.preventDefault();
}

document.getElementById("plusButton").addEventListener("click", () => {
  plusItem();
});
