let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.chek');
let div = document.querySelector('.out');
let help = document.querySelector('.help');
let div1 = document.querySelector('.out1');

nikT = 'Ушастик';
nikL = 'ушастик'
console.log('Моего первого кролика звали Ушастик')


button.onclick=function(){
    
    let b = inputIn.value;
        if (b == nikT || b == nikL){
          
          div.innerHTML = '<br>А как ты догадался? Ладно, не важно, поехали дальше!<br></p><br><button class = "go"><a href="../training css html/game.html"> <span> Следующая задачка </span></a></button>';
          
          }

    
      else{
        div.innerHTML = 'Неправильно';}
    
    
        
    
    
}
help.onclick=function(){
    div.innerHTML = '<p>Загляни в консоль браузера</p>';
}
