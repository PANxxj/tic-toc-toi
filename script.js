let music = new Audio('music.mp3');
let turn_audio = new Audio('ting.mp3');
let gameover=new Audio('gameover.mp3');
let turn ='X';

const changeTurn= () => {
    return turn==='X'?'O':'X';
}
const changeWin = () => {
    return null
}