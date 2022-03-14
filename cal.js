let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");
let result ="";

for(let i=0; i<button.length; i++){
    button[i].addEventListener("click", (a)=>{
         text = a.target.innerHTML;
        // console.log(text);
        if(text == "X") {
         text = "*";
         result += text;
         screen.value += text;
        }
        else if(text == "="){
            screen.value = eval(result);
        }
        else if(text == "AC"){
            result = "";
            screen.value = result;
        }
        else{
            result += text;
            screen.value = result;
        }

         

    });
}