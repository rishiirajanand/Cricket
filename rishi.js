const overCount = document.getElementsByClassName("over-count");

const showRun = document.getElementById('show-run');
const teamRun = document.getElementById('team-run');

// Secont Team Over and Run cal
const secontTeamOver = document.getElementById('second-team-over');
const secontTeamRun = document.getElementById('second-team-run');

const result = document.getElementById('final-result');


let runs = [];

let valTeamAruns = 0;
let valTeamBruns = 0;

function displayRunTeamA(teamRun,showRun){

    let random = Math.floor(Math.random()*7)
    if(random === 5){
        random = 4;
    }
    valTeamAruns += random
    runs.push(random)
    showRun.innerText = 'R/B : '+ [...runs];
    teamRun.innerText = valTeamAruns;
}
function displayRunTeamB(teamRun,showRun){

    let random = Math.floor(Math.random()*7)
    if(random === 5){
        random = 4;
    }
    valTeamBruns += random
    runs.push(random)
    showRun.innerText = 'R/B : '+ [...runs];
    teamRun.innerText = valTeamBruns;
}



function matchOver(num) {

    let totalOver = num*6
    let over = 0;
    let ball = 0;
    let ballCount = 0;

    

    const interval = setInterval(() => {
        ball++;
        if (ball > 6) {
            over++;
            ball = 1;
        }
        if (ball === 6){
            console.log(over + 1);
            ballCount++;
            overCount[0].innerText = `(${over+1})`;
            
            displayRunTeamA(teamRun,showRun)
        
        }

        else{
            console.log(over + '.' + ball);
            ballCount++;
            overCount[0].innerText = `(${over}.${ball})`;

            displayRunTeamA(teamRun,showRun)
        }
        if (ballCount/totalOver === 1) {
            clearInterval(interval);
            overCount[0].innerText ="";
            teamRun.innerText = `(${num} ov. R:${valTeamAruns})`;

            secontTeamOver.innerText = 'match start in 3s'

            setTimeout(()=>{
                secontTeamOver.innerText = "";
                secondTeamRuns(num)
            },3000)      
        }
    }, 1000);
}

matchOver(1);

// *****************************************

function secondTeamRuns(num){
    runs = []
    let totalOver = num*6
    let over = 0;
    let ball = 0;
    let ballCount = 0;

    const interval = setInterval(() => {
        ball++;
        if (ball > 6) {
            over++;
            ball = 1;
        }
        if (ball === 6){
            console.log(over + 1);
            ballCount++;
            secontTeamOver.innerText = `(${over+1})`;

            displayRunTeamB(secontTeamRun, showRun)
        }

        else{
            console.log(over + '.' + ball);
            ballCount++;
            secontTeamOver.innerText = `(${over}.${ball})`;

            displayRunTeamB(secontTeamRun, showRun)
        }
        if (ballCount/totalOver === 1) {
            clearInterval(interval);
            secontTeamOver.innerText = "";
            secontTeamRun.innerText = `(${num} ov. R:${valTeamBruns})`;

            console.log(valTeamAruns,valTeamBruns);

            // final result calculation
            if(valTeamAruns === valTeamBruns)
            {
                result.innerText = "Match tie";
            }
            else{
                valTeamAruns > valTeamBruns ? result.innerText = `SL won by ${valTeamAruns-valTeamBruns} runs` : result.innerText = `BAN won by ${valTeamBruns-valTeamAruns} runs`
            }
        }
        
    }, 1000);

}