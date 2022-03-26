const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const nameDisplay = document.getElementById("nameDisplay");
const inputElment=  document.getElementById("inputAnswer");
const showingAnswer = document.getElementById("callout");

const quizData = [
    {
        question: "which language runs in a web browser ?",
        a:"Java",
        b:"C",
        c:"python",
        d:"javaScript",
        correct : "d",
    },
    {
        question: "what means CSS ?",
        a:"Central style shets",
        b:"Cascading Style Sheets",
        c:"Cascading simple sheets",
        d:"Care SIVS sailboats",
        correct : "b",
    },
    {
        question: "what does HTML stand for ?",
        a:"Hypertext markup language",
        b:"Hypertext markdown language ",
        c:"Hyperloop machine language",
        d:"Helicopters terminals motorboats",
        correct : "a",
    },
    {
        question: "what year was javaScript launched ?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of above",
        correct :"b",
    },
    
];
var getUserName = sessionStorage.getItem("name");
var getUserLastName = sessionStorage.getItem("LastName")
nameDisplay.innerHTML = `Welcome  ${getUserName.toUpperCase()} ${getUserLastName.toUpperCase()} ` 

let cruuentQuiz = 0;
let score = 0;
var userValue ;
var answerLength ;

loadQuiz(cruuentQuiz);

function loadQuiz(index){
    deselectAnswer();
    let currentQuizData = quizData[index];
    questionEl.innerHTML = currentQuizData.question ;
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
};

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
        console.log(answerEl.checked);
    });
}

function getSelectored(){
    let answer ;
    answerEls.forEach(answerEl => {
        console.log(answerEl.checked)
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer
}

function checkBoxes(){
    const checkBox = "checkbox";
    const list = ["a","b","c","d"];
    for(let i = 0; i<list.length;i++){
        document.getElementById(list[i]).type = checkBox;
    }
}

function textBox() {
    const list =["listItem1","listItem2","listItem3","listItem4"];
    for(let i in list ){
        document.getElementById(list[i]).remove();
    }
}

function reloadpage(){
    location.reload()
}

let q = "What is Node.js backend or frontend ? ";
function showAnswer(){
    document.getElementById("q1").innerHTML = `Question 1 : ${quizData[0].question}`;
    document.getElementById("an1").innerHTML = `Answer  1 : ${quizData[0].d}`;
    document.getElementById("q2").innerHTML = `Question 2 : ${quizData[1].question}`;
    document.getElementById("an2").innerHTML = `Answer  2 : ${quizData[1].b}`
    document.getElementById("q3").innerHTML = `Question 3 : ${quizData[2].question}`;
    document.getElementById("an3").innerHTML = `Answer  3 : ${quizData[2].a}`;
    document.getElementById("q4").innerHTML = `Question 4 : ${quizData[3].question}`;
    document.getElementById("an4").innerHTML = `Answer  4 : ${quizData[3].b}`
    document.getElementById("q5").innerHTML = `Question 5 : ${q} `;
    document.getElementById("an5").innerHTML = `Answer  5 : Backend `
    showingAnswer.style.display = "block";  
}
function showResult(){
    quiz.innerHTML = `<h2 style = "clor : black" > You answered ${score}/${quizData.length+1} questions correctly </h2>
    <button onclick = "reloadpage()"> Reload </button>
    <button  style = "background: brown;" onclick = " showAnswer() "> Show Correct Answer </button `
}
      

submitBtn.addEventListener("click" , () => {
    let answer = getSelectored(); 
    
    if(cruuentQuiz == quizData.length){
        answer = null;
        userValue = inputElment.value ;
        answerLength = userValue.length;
        console.log(answerLength)
    }
    if(answer == null && userValue == "backend" ){
        score++;
        showResult();    
    }
    else if(answer == null && answerLength > 7){
        showResult();
    }
    else if(answer == null && answerLength < 7){
        showResult();
    }
    else if(answer == null && userValue == "" ){
        showResult();
    }
    else if(answer == null ){
        alert("You should select one answer")
    }else{
        if(answer === quizData[cruuentQuiz].correct){
            score++
        }
        cruuentQuiz++;                                     
        console.log("the cruuent quiz is " , cruuentQuiz)
        if(cruuentQuiz == quizData.length ){
            textBox();
            questionEl.innerHTML = q ;
            inputElment.type = "text";
            inputElment.value = "";
        }else{
            checkBoxes();
            loadQuiz(cruuentQuiz);
         }      
    }
});
