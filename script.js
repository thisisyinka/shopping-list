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

// function isCheckboxClicked() {
//   let strikecheckbox = document.getElementsByClassName("itemcheckbox");
//   if(strikecheckbox.checked === true) {

//   }
// }

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
    let strikecheckbox = document.getElementsByClassName("itemcheckbox");
    let clength = strikecheckbox.length;
    let isChecked = (strikecheckbox.checked = true);
    for (let i = 0; i < clength; i++) {
      if (isChecked) {
        strikecheckbox.style.textDecoration = "line-through";
      } else {
        strikecheckbox.style.textDecoration = "none";
      }
    }
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
