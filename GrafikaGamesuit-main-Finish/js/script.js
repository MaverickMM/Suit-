let PlayerPoints = document.querySelector("#PlayerPoints");
let EnemyPoints = document.querySelector("#EnemyPoints");

let choices = document.querySelectorAll(".choices");

let PlayerResult = document.querySelector("#PlayerResult");
let resultText = document.querySelector("#resultText");
let EnemyResult = document.querySelector("#EnemyResult");

var PlayerWin = 100;
var EnemyWin = 100;
var point = 0;
var point1 = 0;
var win = false;
var win1 = false;
var dmgasli = 10;
var dmg = 0;
var dmgenemy = 10;
var def = 0;
var hpreg = 0;


point1 = window.onload = localStorage.getItem("pointkirim1");
if(isNaN(point1) === true){
    point1 = 0;
}else{
    point+=parseInt(point1);
}

dmg += parseInt(window.onload = localStorage.getItem("dmgkirim"));
def += parseInt(window.onload = localStorage.getItem("defkirim"));
hpreg += parseInt(window.onload = localStorage.getItem("hpregkirim"));


if(isNaN(dmg) === true){
    dmg = 1;
}

if(isNaN(def) === true){
    def = 0;
}

if(isNaN(hpreg) === true){
    hpreg = 0;
}
dmgasli*=parseInt(dmg);
dmgenemy -= dmgenemy*def;
PlayerWin += PlayerWin*hpreg;


if(dmgasli > 30 && dmgasli < 50){
    EnemyWin +=parseInt(200);

}else if(dmgasli >= 50 && dmgasli < 100){
    EnemyWin +=parseInt(200);
}else if(dmgasli >=parseInt(100)){
    EnemyWin +=parseInt(1000);
}else{
    EnemyWin = parseInt(100);
}
choices.forEach((choose, PlayerChoose) => {
    choose.addEventListener("click", () => {
        PlayerResult.innerHTML = `${choose.innerHTML}
                <h3>Player</h3>`;

        //Generate Random Number For Enemyuter turn
        let EnemyuterChoose = Math.floor(Math.random() * 3);
        //        console.log(EnemyuterChoose);

        if (EnemyuterChoose === 0) {
            EnemyResult.innerHTML = `<i class="fas fa-hand-rock">✊</i>
                <h3>Enemy</h3>`;
        } else if (EnemyuterChoose === 1) {
            EnemyResult.innerHTML = `<i class="fas fa-hand-paper">✋</i>
                <h3>Enemy</h3>`;
        } else if (EnemyuterChoose === 2) {
            EnemyResult.innerHTML = `<i class="fas fa-hand-scissors">✌️</i>
                <h3>Enemy</h3>`;
        }
        //RESULT
        //0 = Rock
        //1 = Paper
        //2 = Scissor

        if(EnemyWin <= 0){
            point+=1;
            win = true
        }else if(PlayerWin <= 0){
            win1 = true
        }

        if (PlayerChoose === EnemyuterChoose) {
            resultText.innerText = `Draw`;
        } else if (PlayerChoose === 0 && EnemyuterChoose === 1) {
            //Enemyuter Win
            PlayerWin -= dmgenemy;
            resultText.innerText = `Loss`;
        } else if (PlayerChoose === 1 && EnemyuterChoose === 2) {
            //Enemyuter Win
            PlayerWin -= dmgenemy;
            resultText.innerText = `Loss`;
        } else if (PlayerChoose === 2 && EnemyuterChoose === 0) {
            //Enemyuter Win
            PlayerWin -= dmgenemy;
            resultText.innerText = `Loss`;
        } else {
            //Player Win
            EnemyWin -= dmgasli;
            resultText.innerText = `Win`;
        }
        PlayerPoints.innerText = PlayerWin;
        EnemyPoints.innerText = EnemyWin;

        if(win === true){
            localStorage.setItem("pointkirim",point);
            window.location.href = "store.html";
        }else if(win1 === true){
            points = 0;
            dmgasli = 10;
            def = 0;
            hpreg = 0;
            iterasi = 0;
            dmg = 0;
            window.location.href = "kalah.html";
        }
    })
})


