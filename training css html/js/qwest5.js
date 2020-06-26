let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.chek');
let div = document.querySelector('.out');
let help = document.querySelector('.help');
let div1 = document.querySelector('.out1');

num1 = document.querySelector('.num1');
num2 = document.querySelector('.num2');
num3 = document.querySelector('.num3');
num4 = document.querySelector('.num4');
num5 = document.querySelector('.num5');

let x = Math.round(Math.random()*(5-1)+1);
console.log(x)
if (x==1){
    num1.style.position = "sticky";
}
else if (x==2){
    num2.style.position = 'sticky';
}
else if (x==3){
    num3.style.position = 'sticky';
}
else if (x==4){
    num4.style.position = 'sticky';
}
else if (x==5){
    num5.style.position = 'sticky';
}
button.onclick=function(){
    let x = Math.round(Math.random()*(5-1)+1);
            console.log(x)
    let b = inputIn.value;
        if (b == x){
          
          div.innerHTML = '<br>Угадал, магия)<br></p><br> Ты прошел все испытания, дай мне обратную связь плз';
          
          }

        else  {
            div.innerHTML = 'Не угадал. Попробуй еще раз';
            
            }         
        
}




help.onclick=function(){
    div.innerHTML = '<p>Пролистай вниз</p>';
}
