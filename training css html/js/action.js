let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.chek');
let div = document.querySelector('.out');
let help = document.querySelector('.help');
let div1 = document.querySelector('.out1');

nikT = 'Аким';
nikL = 'аким';



button.onclick=function(){
    
    let b = inputIn.value;
        if (b == nikT || b == nikL){
            div.innerHTML = '<br>Неужели это ТЫ, ну что, герой, поехали?<br></p><br><button class = "go"><a href="../training css html/qwest1.html"> <span> Поехали! </span></a></button>';
            div1.innerHTML = 'НЕ забудь ознакомиться с правилами, это важно!<br>1. Нельзя открывать файлы игры, кроме с названием "Start", но можно делать все, что хочешь в своем браузере<br>2.Не бомбить на разработчика игры, он ивналид с дальтонизмом, путает красный и зеленый цвет<br>3.Если ввел неправильный ответ обнови страницу и попробуй еще раз, все ответы пишутся с большой буквы<br>4.Пройди ее до конца, я несколкьо дней старался </p>';          
          }

          else{
             div.innerHTML = '<p>Эти задания подсилу выполнить только одному человеку, и его зовут по другому'};
    
          }
        help.onclick=function(){
    div.innerHTML = '<p>Как твое имя по паспорту?</p>';
}






