const indexJankenMap = {0:"img/gu.jpg", 1:"img/cho.jpg", 2:"img/pa.jpg"};
const indexOrderMap = {0:"勝って", 1:"負けて", 2:"あいこ"};
//自分の手を選んだらお題と相手を変える
const friend = document.getElementById('myhand-content');
friend.addEventListener('click',function(){
    console.log('click');

    const nextEnemy = getRandomContent(indexJankenMap);
    let enemy_hand = document.getElementById('enemy-hand');
    enemy_hand.setAttribute('src', nextEnemy);

    const nextOrder = getRandomContent(indexOrderMap);
    document.getElementById('order-content').innerHTML = nextOrder;
});

function getRandomContent(contentMap) {
    /*　input(map): 要素
        output: 要素
    */
    const random_index = Math.floor(Math.random()*Object.keys(contentMap).length);
    return contentMap[random_index];
}