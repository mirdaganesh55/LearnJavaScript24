console.log("Hello");
//window.alert("Checking window");

//console.log(document.body);
//console.dir(document.body);

//let head = document.getElementById("Heading");
//console.dir(head);
//
//let heads = document.getElementsByClassName("Heading-class");
//console.dir(heads);
//console.log(heads);
//
//let para = document.getElementsByTagName("p");
//console.dir(para);
//console.log(para);

//let paras =document.querySelector("p");
//console.dir(paras);
//
//let parass = document.querySelectorAll(".Heading-class");
//console.dir(parass);
//let a = paras.tagName;
//console.dir(a);
//
//let div = document.querySelector("div");
//console.dir(div);
//
//let h = document.getElementById("h3");
//
let add = document.getElementById("add");
console.dir(add.innerText);
add.innerText = add.innerText + " From Apna Collage";

let divs = document.querySelectorAll(".box");
//divs[0].innerText = "New 1";
//divs[1].innerText = "New 2";
//divs[2].innerText = "New 3";
let count = 1;
for(div of divs){
	div.innerText = `New Box ${count}`;
	count++;
}



















