const d = document;
let player = 1;
const arrayStatusGame = [];
arrayDashboardInit();

const dashboard = d.querySelector('.dashboard');
dashboard.addEventListener('click', e => {
    if(e.target.classList.contains('btn-state')){
        turn(e.target, arrayStatusGame)
    };
});

const reload = d.querySelector('.btn-reload');
reload.addEventListener('click', () => {
    inReload();
});

//Functions 
function arrayDashboardInit(){
    for( let i = 1; i <= 9; i++){
        let btn = d.querySelector(`.a${i}`);
        arrayStatusGame.push(btn);
    };
};

const turn = (btn, arr) => {
    btn.classList.remove('neom');
    btn.classList.add('neom-down');
    let displayPlayer = d.querySelector('.display-player');

    if (player === 1) {
        printMove(btn, 'player-red', 'X');
        displayPlayer.classList.remove('player-red');
        displayPlayer.classList.add('player-blue'); 
    } else {
        printMove(btn, 'player-blue', 'O');
        displayPlayer.classList.remove('player-blue');
        displayPlayer.classList.add('player-red');
    };
    statusGame(arr, displayPlayer); 
};

const printMove = (btn, playerColor, turn) => {
    btn.classList.add(playerColor);
    btn.classList.remove('btn-state');
    btn.textContent = turn;
    (player === 1) ? player = 2 : player = 1;
};

const statusGame = (arr, winner) => {
    if (
        arr[0].textContent === arr[1].textContent && arr[1].textContent === arr[2].textContent && arr[0].textContent !== '' ||
        arr[3].textContent === arr[4].textContent && arr[4].textContent === arr[5].textContent && arr[3].textContent !== '' ||
        arr[6].textContent === arr[7].textContent && arr[7].textContent === arr[8].textContent && arr[6].textContent !== '' ||
        arr[0].textContent === arr[3].textContent && arr[3].textContent === arr[6].textContent && arr[0].textContent !== '' ||
        arr[1].textContent === arr[4].textContent && arr[4].textContent === arr[7].textContent && arr[1].textContent !== '' ||
        arr[2].textContent === arr[5].textContent && arr[5].textContent === arr[8].textContent && arr[2].textContent !== '' ||
        arr[0].textContent === arr[4].textContent && arr[4].textContent === arr[8].textContent && arr[0].textContent !== '' ||
        arr[2].textContent === arr[4].textContent && arr[4].textContent === arr[6].textContent && arr[2].textContent !== ''
        ){
        (player === 1) ? gameOver(winner, 'player-blue') : gameOver(winner, 'player-red');// *
    };
};

const gameOver = (winner,player) => {
    //parte1
    winner.classList.remove(winner.classList[1]); //verifica ultima clase y la pasa como parametro al .remove() *
    winner.classList.add(player); // color player win
    document.querySelector('.player-text').textContent = 'Winner'; //text win
    //parte2
    d.querySelectorAll('.btn').forEach(e => { //bloquea movimientos
        e.classList.remove('btn-state');
    });
};

const inReload = () => { 
    let ix = 0;
    let reload = d.querySelectorAll('.btn');
    
    const animInReload = callback => {     
        setTimeout(()=>{
            reload[ix].classList.add('reload')
            ix++;
            callback();
        },110);
    };
    animInReload(()=>{
        animInReload(()=>{
            animInReload(()=>{
                animInReload(()=>{
                    animInReload(()=>{
                        animInReload(()=>{
                            animInReload(()=>{
                                animInReload(()=>{
                                    animInReload(()=>{
                                        setTimeout(()=>{location.reload();},120)
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });//fin callBack Hell :S
};//fin inReload()



