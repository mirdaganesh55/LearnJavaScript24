//let btn1 = document.querySelector("#btn1");
let btn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";

btn.addEventListener("click",()=>{
	if(currentMode === "light"){
		currentMode = "dark";
		body.classList.add("dark");
		body.classList.remove("light");
		
//		document.querySelector("body").style.backgroundColor = "black";			
	}else{
		currentMode = "light";
		body.classList.add("light");
		body.classList.remove("dark");
//		document.querySelector("body").style.backgroundColor = "white";
	}
	console.log(currentMode);
	})



//btn1.onclick = () => {
//	console.log("btn1 is clicked");
//	let a = 21;
//	a++;
//	console.log(a);
//}
//btn1.onclick = (e) => {
//	console.log(e);
//	console.log(e.type);
//	console.log(e.target);
//}
//
//btn1.addEventListener("click",()=>{
//	console.log("button was clicked Handler1");
//}
//)
//btn1.addEventListener("click",()=>{
//	console.log("button was clicked Handler2");
//}
//)
//
//
//let div = document.querySelector("div");
//div.onmouseover = () =>{
//	console.log("You are inside the Div");
//}