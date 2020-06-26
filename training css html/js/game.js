
interval=500
let button1 = document.querySelector('.button1');
//let tyk = document.querySelector('.tyk');
let second = document.querySelector('.second');
let out = document.querySelector('.out');
let help = document.querySelector('.help');

function timer() {

    var seconds = 100;
    
    var seconds_timer_id = setInterval(function() {
        if (seconds > 0) {
            let x = Math.round(Math.random()*1266);
            let y = Math.round(Math.random()*600);
            console.log("x " + x);
            console.log("y " +y);
            seconds --;
            second.innerHTML = seconds

            if (seconds %2 == 0) {
                console.log("четное")
                button1.innerHTML = '<a href="../training css html/qwest3.html"><button class = tyk>Следующее задание</button></a>';
                
                button1.style.top =  y + "px";
                button1.style.left =  x + "px";
            }
            else if(seconds %2 == 1){
                console.log("нечетное")
                button1.innerHTML = '<button class = button2></button>'
            }
            console.log(seconds)
        } else {
            clearInterval(seconds_timer_id);    
        }
    }, 500);


   
    
}
help.onclick=function(){
    out.innerHTML = 'Какая помощь? пробуй еще, слабак!!! А если все же слабак <a href="../training css html/game2.html">жми сюда</a>';
          

}


