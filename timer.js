let timer_id;
let is_started = false;
const game_time = 10;

const start_btn = document.getElementById('start-btn');
start_btn.addEventListener('click',function(){
    if(is_started) return 0; //2度押し厳禁

    initFunc();
    document.getElementById("myhand-content").click(); //ゲームスタート時にお題と相手の手を更新
    start_btn.style.visibility = "hidden";

    is_started = true;

    let date = new Date();
    date.setSeconds(date.getSeconds() + game_time);

    timer_id = setInterval(function() { countdown(date); }, 10);
});

const initFunc = function() {
    // game (re)start時の画面初期化
    document.getElementById('janken-area').style.display = "flex";
    document.getElementById('order-content').style.display = "block";
    document.getElementById('timer').innerHTML = game_time;
    document.getElementById('score').innerHTML = 0;
}

const exitFunc = function() {
    is_started = false;
    document.getElementById('order-content').style.display = "none";
    document.getElementById('janken-area').style.display = "none";
    start_btn.innerHTML = "CONTINUE";
    start_btn.style.visibility = "visible";
        

}

const countdown = function(limit) {
    const now = new Date();
    if(limit < now) { //time over
        clearInterval(timer_id);
        drawRanking();
        exitFunc();

        return 0;
    }

    let remain = new Date(limit - now);
    remain_sec = remain.getSeconds();
    document.getElementById('timer').innerHTML = remain_sec;
}
