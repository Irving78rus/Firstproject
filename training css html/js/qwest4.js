let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.chek');
let div = document.querySelector('.out');
let help = document.querySelector('.help');
let div1 = document.querySelector('.out1');

nikT = 'Зеленый';
nikL = 'зеленый';
blueT = 'Синий';
redT = 'Красный';
blueL = 'синий';
redL = 'красный';



button.onclick=function(){
    
    let b = inputIn.value;
        if (b == nikT || b == nikL){
          
          div.innerHTML = '<br>Ммм, объедение, поехали дальше?<br></p><br><button class = "go"><a href="../training css html/qwest5.html"> <span> Следующая задачка </span></a></button>';
          
          }

    
      else if(b == blueT || b == blueL){
        div.innerHTML = 'Фу, даже бомжи это не едят, попробуй еще раз';
    
        }
        else if(b == redT || b == redL){
            div.innerHTML = 'Ты что копрофил??? Попробуй еще раз';
        
            }
        else  {
            div.innerHTML = 'Ты можешь выбрать только один из трех цветов. Попробуй еще раз';
        
            }   
        
    
    
        
    
    
}
help.onclick=function(){
    div.innerHTML = '<p>Помнишь второе правило игры?</p>';
}
