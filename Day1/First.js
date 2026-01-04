// Create Element through js
const header1 = document.createElement("h1");
header1.innerText = "Hello World from js";
header1.style.backgroundColor = "blue";
header1.style.fontSize = "30px";
header1.style.color = "white";

const header2 = document.createElement("h2");
header2.innerText = "Hello World";
header2.style.backgroundColor = "black";
header2.style.fontSize = "20px";
header2.style.color = "white";

const root = document.getElementById("root");
root.append(header1);
root.append(header2);