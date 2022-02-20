const table = document.querySelector('.table');
let move = 0;
let result = '';
const wrapper = document.querySelector('.result-wrapper');
const content = document.querySelector('.content');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay')
const cross = document.querySelector('.score-cross');
const zero = document.querySelector('.score-zero');
const scoreTable = document.querySelector('.score-table');
const scoreItem = document.querySelectorAll('.score-item');
let crossWin = 0;
let zeroWin = 0;
let record = [];
const sound = document.querySelector('.sound');
addEventListener('click', e => {
    if (e.target.className == 'box' && e.target.innerHTML == '') {
       if (move % 2 == 0 ) {
        e.target.innerHTML = 'X';
        e.target.style.color = "#ff9f00";
        e.target.style.transition = "0.5s";
        sound.play();
       }  
       else {
        e.target.style.color = 'white';
        e.target.innerHTML = 'O'; 
        e.target.style.transition = "0.5s";
        sound.play();
       } 
        move ++;
        check();
        
        
        if (move == 9) {
            showDraw();
        }
    }
})
function check() {
    const box = document.querySelectorAll('.box');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
   
    for (let i = 0; i<arr.length; i++) {
        
        if ( box[arr[i][0]].innerHTML == 'X' && box[arr[i][1]].innerHTML == 'X' && box[arr[i][2]].innerHTML == 'X' ) {
            result = 'Cross';
            showResult(result);
            record.unshift('cross win')
           // localStorage.setItem('arr', JSON.stringify(record));
            
           
          /*  for (let j = 0; j < arr1.length; j++) {
              
                scoreItem[j].textContent = JSON.parse(localStorage.getItem("arr"))[j]
            }
           */
           
        }
        if ( box[arr[i][0]].innerHTML == 'O' && box[arr[i][1]].innerHTML == 'O' && box[arr[i][2]].innerHTML == 'O') {
            
            result = 'Zero';
            showResult(result);
            record.unshift('zero win');
            //localStorage.setItem('arr', JSON.stringify(record));
           
           
            /*for (let j = 0; j < record.length; j++) {
                //let arr2 = JSON.parse(localStorage.getItem("arr"));
                scoreItem[j].textContent = JSON.parse(localStorage.getItem("arr"))[j]; 
                console.log(JSON.parse(localStorage.getItem("arr"))[j])
            }*/
            
            
            
            
        }
        localStorage.setItem('arr', JSON.stringify(arr1));
        for (let j = 0; j < record.length; j++) {
            //let arr2 = JSON.parse(localStorage.getItem("arr"));
            scoreItem[j].textContent = JSON.parse(localStorage.getItem("arr"))[j]; 
            console.log(JSON.parse(localStorage.getItem("arr"))[j])
        }
    }
   
}




function showResult(winner) {
    content.textContent = `${winner} win by ${move} steps!`;
    wrapper.style.display = 'block';
   
}
function showDraw() {
    content.textContent = `Draw!`;
    wrapper.style.display = 'block';
}
function newGame () {
    wrapper.style.display = 'none';
    const box = document.querySelectorAll('.box');
    box.forEach((el) => el.innerHTML='')
    move = 0;
}
closeBtn.addEventListener('click',newGame);
overlay.addEventListener('click',newGame);
const audio = document.querySelector('audio');
const play = document.querySelector('.play');
document.getElementById("myrange").addEventListener("change", function() {

    audio.volume = this.value/100;
  });
  let isPlay = false;
  function playMusic() {
      if (isPlay == false) {
          audio.play();
          isPlay = true;
      }
      else if  (isPlay == true) {
          audio.pause();
          isPlay = false;
      }
      play.classList.toggle('stop')
  }
 
  play.addEventListener('click',playMusic)

