let h1 = document.querySelector("h1");
let ul = document.querySelector("ul");
let body = document.querySelector("body");

// h1.className = "coolTitle";
let button = document.getElementById("enter");
let input = document.getElementById("userinput");

function errorMsg() {
  let p = document.createElement("p");
  let pText = document.createTextNode("The textbox is empty!");
  p.appendChild(pText);
  body.appendChild(p);
  p.className = "error";
  p.value = "";
}

function isCheckboxClicked() {
  //code
}

button.addEventListener("click", function() {
  if (input.value !== "") {
    let li = document.createElement("li");
    let liText = document.createTextNode(input.value);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "itemcheckbox";
    li.appendChild(checkbox);
    li.appendChild(liText);
    ul.appendChild(li);
    input.value = "";
  } else {
    errorMsg();
  }
});

input.addEventListener("keypress", function(event) {
  if (input.value !== "" && event.keyCode === 13) {
    let li = document.createElement("li");
    let liText = document.createTextNode(input.value);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "itemcheckbox";
    li.appendChild(checkbox);
    li.appendChild(liText);
    ul.appendChild(li);
    input.value = "";
  }
});
