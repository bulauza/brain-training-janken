const ranking_reset_btn = document.getElementById('reset-btn');
ranking_reset_btn.addEventListener('click',function(){
    localStorage.clear();
    for (let i = 1; i < 3+1; i++) {
        $(`#ranking-body > tr:nth-child(${i}) > td:last`).text('');
    }
});

const drawRanking = function(score_list) {
    for (let i = 1; i < 3+1; i++) {
        if(!score_list) break;
        if(score_list.length < i) break;
        $(`#ranking-body > tr:nth-child(${i}) > td:last`).text(score_list[i-1]['score']);
    }
};

$(function() {
    let score_json = localStorage.getItem('ranking');
    let score_list = JSON.parse(score_json);
    if(!score_list) score_list = [];

    drawRanking(score_list);

    $('#regist-btn').click(function() {
        score_json = localStorage.getItem('ranking');
        score_list = JSON.parse(score_json);
        if(!score_list) score_list = [];

        let score_num = parseInt($('#score').text());
        score_list.push({'score': score_num});
        score_list.sort((a, b) => b.score- a.score);
        localStorage.setItem('ranking', JSON.stringify(score_list));

        drawRanking(score_list);
    });
});
