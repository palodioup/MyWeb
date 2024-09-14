function showColor() {
  const clickElement = document.getElementById("button");
  clickElement.style.backgroundColor = "red";
}

function changeBackgroundColor() {
  const main = document.getElementById("body")
  main.style.backgroundColor = "black"
  main.style.color = "white"
}

function hideBackgroundColor() {
  const main = document.getElementById("body")
  main.style.backgroundColor = "white"
  main.style.color = "black"
}