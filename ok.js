const myinput = document.getElementById("gun");
const mybutton = document.getElementById("submitbutton");

mybutton.addEventListener('click', myclickcallback);
function myclickcallback(){
 const userinput = myInput.value;
    if(userinput.length<3){
        alert("length should be more than 3");
    }else if(userInput >10){
        alert("length should be less than 10");

    }else{
    for(let i=0;i<userInput.length ;i++){
        if(userInput[i]<'0'){
            alert("should be number");
            break;
        }
        if(userInput[i] > '9'){
            alert("should be a number");
            break;
        }
    }
}
