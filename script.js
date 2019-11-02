let h1 = document.querySelector("h1");
let ul = document.querySelector("ul");
let body = document.querySelector("body");

let button = document.getElementById("enter");
let input = document.getElementById("userinput");

function errorMsg() {
  let p = document.getElementById("paragraph");
  let pText = document.createTextNode("The textbox is empty!");
  p.appendChild(pText);
  body.appendChild(p);
  p.className = "error";
  p.value = "";
}

function isCheckboxChecked() {
  //code
}

button.addEventListener("click", function() {
  if (input.value !== "") {
    let li = document.createElement("li");
    let liText = document.createTextNode(input.value);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "itemcheckbox";
    li.appendChild(liText);
    ul.appendChild(li);
    li.appendChild(checkbox);
    input.value = "";
  } else {
    errorMsg();
  }
});

input.addEventListener("keypress", function() {
  if (input.value !== "") {
    let li = document.createElement("li");
    let liText = document.createTextNode(input.value);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "itemcheckbox";
    li.appendChild(liText);
    ul.appendChild(li);
    li.appendChild(checkbox);
    input.value = "";
  }
});
