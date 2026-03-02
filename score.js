const jankenIndexMap = {"img/gu.jpg": 0, "img/cho.jpg":1, "img/pa.jpg": 2};
const orderIndexMap = {"あいこ": 0, "負けて":1, "勝って": 2};

const friends = document.getElementById('myhand-content').children;
for(let i = 0; i < friends.length; i++) {
    friends[i].addEventListener('click',function(){
        // const enemy = document.getElementById('enemy-content').innerHTML;
        const order = document.getElementById('order-content').innerHTML;
        console.log(order);

        let enemy_img = document.getElementById('enemy-hand');
        let enemy = enemy_img.getAttribute('src');

        const judge = (i - jankenIndexMap[enemy] + 3) % 3; // 2:勝ち、1：負け、0：あいこ

        let d_score; //スコア加算用
        judge == orderIndexMap[order] ? d_score = 1: d_score = -1;

        let score = document.getElementById('score');
        score.innerHTML = parseInt(score.innerHTML) + d_score;
    });
}