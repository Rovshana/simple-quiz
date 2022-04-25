//   here, I've just created an array which holds our right answers,
//  I mean which variants are the corrects in our quiz with order this array holds them
// Then I just get my elements by their class - quiz-form and result in order to give functionalty-
//for checking correct answers and showing them on the browser

 correctAnswers = ['C', 'B', 'B', 'C'];
form = document.querySelector(".quiz-form");
let result = document.querySelector('.result');
// only complicated part here may be useranswers array it just reference to the form tag, and-
//input tag of name and value in order to check the correct answers 
form.addEventListener('submit', (e)=>{
e.preventDefault();
let score = 0;
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
userAnswers.forEach((answer, index)=>{
    if(answer === correctAnswers[index]){
        score +=25;
    }
})
//console.log(score);
//  in this part I am just showing the result on the browser
result.querySelector('span').innerHTML = `${score}%`

})