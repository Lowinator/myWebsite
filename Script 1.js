var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var sum = document.getElementById("result1");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var sub = document.getElementById("result2");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var mul = document.getElementById("result3");
var div = document.getElementById("result4");

num1.addEventListener("input", addition);
num2.addEventListener("input", addition);
num3.addEventListener("input", subtraction);
num4.addEventListener("input", subtraction);
num5.addEventListener("input", multiplication);
num6.addEventListener("input", multiplication);
num7.addEventListener("input", division);
num8.addEventListener("input", division);

function addition() {
	var a = parseFloat(num1.value) || 0;
	var b = parseFloat(num2.value) || 0;

	sum.innerHTML = a + b;
}
function subtraction() {
	var c = parseFloat(num3.value) || 0;
	var d = parseFloat(num4.value) || 0;

	sub.innerHTML = c - d;
}
function multiplication() {
	var a = parseFloat(num5.value) || 0;
	var b = parseFloat(num6.value) || 0;

	mul.innerHTML = a * b;
}
function division() {
	var a = parseFloat(num7.value) || 0;
	var b = parseFloat(num8.value) || 0;

	div.innerHTML = a / b;
}
function fun1() {
	if(pic2.className === "hide")
		pic2.className = "";
	else
		pic2.className = "hide";
}

function lala() {
	console.log("function lala is here!");
}

function funn(a, b, lala) {
	console.log("funn is here!");
	lala();
}



var pic1 = document.getElementById("pic1");
pic1.addEventListener("click", fun1);
