let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.chek');
let div = document.querySelector('.out');
let help = document.querySelector('.help');
let div1 = document.querySelector('.out1');

nikT = 'Лев';
nikL = 'лев';



button.onclick=function(){
    
    let b = inputIn.value;
        if (b == nikT || b == nikL){
          
          div.innerHTML = '<br>Все верно, поехали дальше?<br></p><br><button class = "go"><a href="../training css html/qwest4.html"> <span> Следующая задачка </span></a></button>';
          
          }

    
      else{
        div.innerHTML = 'Неправильно';}
   
}



help.onclick=function(){
    div.innerHTML = '<p>Нужно прошерстить код в тегах body(не забудь 1-ое правило игры)</p>';
}
