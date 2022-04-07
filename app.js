const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
let userChoice
let ComputerChoice
let result
possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener('click',(e)  =>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getresult()
}))
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) + 1
    if(randomNumber === 1)
    {
        ComputerChoice='Rock'
    }
    if(randomNumber === 2)
    {
        ComputerChoice ='Scissors'
    }
    if(randomNumber=== 3)
    {
        ComputerChoice= 'Paper'
    }
    computerChoiceDisplay.innerHTML= ComputerChoice
}
function getresult()
{
    if(Computerchoice === userChoice)
    {
        result="its a Draw!"
    }
    if(ComputerChoice==='Rock'&& userChoice==="Paper")
    {
        result="you Win🎉"
    }
     if(ComputerChoice==='Rock'&& userChoice==="Scissors")
    {
        result="you Lose"
    }
    if(ComputerChoice==='Paper'&& userChoice==="Scissors")
    {
        result="you Win🎉"
    }
    if(ComputerChoice==='Paper'&& userChoice==="Rock")
    {
        result="you lose"
    }
    if(ComputerChoice==='Scissors'&& userChoice==="Rock")
    {
        result="you Win🎉"
    }
    if(ComputerChoice==='Scissors'&& userChoice==="Paper")
    {
        result="you Lose"
    }
    resultDisplay.innerHTML=result

}
