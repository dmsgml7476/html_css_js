// 문자열 글자 '' "" `` 셋 중 하나 사용
const myString = "Dexter Yoon";

const body = document.querySelector("body");
const p = document.createElement("p");

p.innerText = myString;

p.style.color = "blue";
p.className = "header";

body.append(p);
