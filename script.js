let music = new Audio('music.mp3');
let turn_audio = new Audio('ting.mp3');
let gameover=new Audio('gameover.mp3');
let turn ='X';

const changeTurn= () => {
    return turn==='X'?'O':'X';
}
const changeWin = () => {
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
}

let boxes=document.getElementsByClassName('box')
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if (boxtext.innerText===''){
            boxtext.innerText=turn
            turn=changeTurn()
            // turn_audio.play()
            document.getElementsByClassName('info')[0].innerText='Turn for '+turn
        }
    })
})