import './style.css';
import { NewApiGame, GetScores } from '../module/api';
const name = document.getElementById("name");
const score = document.getElementById("score");
const submit = document.getElementById("submit");
const message = document.querySelector(".message");
const refresh = document.getElementById("refresh");

// for the first api store it inside a new variable , loop through it and put the contents inside a new li, get the score length

const getAllScores = async () => {
    const allScores = await GetScores();
    // function created to sort the scores numerically (ascending to descending order) 
    allScores.result.sort((a, b) => b.score - a.score);
    allScores.result.forEach(item => {
        const scoreList = document.getElementById('score-list');
        const scoreLI = document.createElement('li');
        scoreLI.innerHTML = `${item.user}: ${item.score}`;
        scoreList.appendChild(scoreLI);
    });
    const scoreLength = allScores.result.length;
    const scorelength = document.getElementById('score-length');
    scorelength.innerHTML = `Total Number of Users : ${scoreLength}`;
}

// event handler function 

function Scores (e) {
    NewApiGame();
    e.preventDefault();

    if(name.value === "" || score.value === ""){
        message.textContent = 'ERROR !! Add a valid user name and score';
        message.className = 'error';
        message.style.color = 'bisque';
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 5000);
    } else {
        message.textContent = 'Succesfully Added !! Click refresh to show';
        message.className = 'success';
        message.style.color = 'bisque';
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 5000);
    }
    name.value = "";
    score.value = "";
}
getAllScores();
submit.addEventListener("click", Scores);
refresh.addEventListener("click", () => {
    window.location.reload()
});
