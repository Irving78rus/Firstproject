let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.chek');
let div = document.querySelector('.out');
let help = document.querySelector('.help');
let div1 = document.querySelector('.out1');

nik = 4;



button.onclick=function(){
    
    let b = inputIn.value;
        if (b == nik){
          
          div.innerHTML = '<br>Все верно, поехали дальше?<br></p><br><button class = "go"><a href="../training css html/qwest2.html"> <span> Следующая задачка </span></a></button>';
          
          }

    
      else{
        div.innerHTML = '<p>Неправильно';}
    
    
        
    
    
}
help.onclick=function(){
    div.innerHTML = '<p>Тебе рили нужна подсказка?</p>';
}
