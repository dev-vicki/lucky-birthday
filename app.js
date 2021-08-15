var closeBtn = document.querySelector("#close");
var date = document.querySelector("#input-bday");
var luckyNo = document.querySelector("#luckyNumber");
var checkBtn = document.querySelector("#check-btn");

function sumDigit(number){
    var sum = 0;
    while(number!=0){
        sum += Math.floor(number%10);
        Math.floor(number/=10);
    }
    return sum;
}


function isBirthdayLucky(){
    document.getElementById("gif").style.display = "block";
    if(date.value === ""){

        document.querySelector("#gif").innerText = "Please Enter Your Birth Date";
    }
    else if(luckyNo.value === ""){

        document.querySelector("#gif").innerText = "Please Enter Your Lucky Number";
    }
   else{
    var bday = date.value.split("-");
    var digitSum = 0;
    for(var i=0;i<3;i++){
        digitSum += sumDigit(parseInt(bday[i]));
    }


  if(digitSum%(luckyNo.value)==0){
    document.querySelector("#gif").innerHTML = `<img src="./assets/lucky.gif" alt="Happy"/>`;
  }
  else  document.querySelector("#gif").innerHTML = `<img src="./assets/unlucky.gif" alt="sad"/>`;
}
}


checkBtn.addEventListener("click",isBirthdayLucky);

closeBtn.addEventListener("click",()=>{
    document.getElementById("alert").style.display = "none";
});