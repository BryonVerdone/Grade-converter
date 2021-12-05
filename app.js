const input = document.getElementById('number-input');

const convertBtn= document.getElementById('convert');
let displayGrade= document.getElementById('display-grade')
convertBtn.addEventListener("click",function(){
    console.log( input.value);
})



function convert(){
const numberValue=parseInt(input.value);
let grade;
if(numberValue>= 90){
   grade= 'A'
   displayGrade.style.color='green'
   displayGrade.style.background='black'
}
else if(numberValue>=80){
    grade = 'B'
    displayGrade.style.color='green'
    displayGrade.style.background='black'
}
else if(numberValue>=70){
    grade = 'C'
    displayGrade.style.color='yellow'
    displayGrade.style.background='black'
}
else if(numberValue>=60){
    grade = 'D'
    displayGrade.style.color='orange'
    displayGrade.style.background='black'
}
else{
    grade= 'F'
    displayGrade.style.color='red'
    displayGrade.style.background='black'
}
displayGrade.innerText= `Your letter grade is ${grade}`
}