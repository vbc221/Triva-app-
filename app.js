const store = [
  {
    question: 'What is the capital of Japan?',
    answers: [
      'Osaka',
      'Kyoto',
      'Fukuoka',
      'Tokyo'
    ],
    correctAnswer: 'Tokyo',
    website: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
  },
  {
    question: 'What is the capital of Taiwan?',
    answers: [
      'Hsinchu',
      'Taipei',
      'Kaohsiung',
      'Tainan'
    ],
    correctAnswer: 'Taipei',
    website: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/2000px-Flag_of_the_Republic_of_China.svg.png',
  },
  {
    question: 'What is the capital of China?',
    answers: [
      'Beijing',
      'Shanghai',
      'Shenzhen',
      'Nanjing'
    ],
    correctAnswer: "Beijing",
    website: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png',
  },
  {
    question: 'What is the capital of South Korea?',
    answers: [
      'Busan',
      'Incheon',
      'Seoul',
      'Gimpo',
    ],
    correctAnswer: 'Seoul',
    website: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
  },
  {
    question: 'What is the capital of Canada?',
    answers: [
      'Ottawa',
      'Toronto',
      'Montreal',
      'Ontario'
    ],
    correctAnswer: 'Ottawa',
    website: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
  },
  {
    question: 'What is the capital of Australia?',
    answers: [
      'Canberra',
      'Sydney',
      'Melbourne',
      'Perth',
    ],
    correctAnswer: 'Canberra',
    website: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
  },
  {
    question: 'What is the capital of Mexico?',
    answers: [
      'Guadalajara',
      'Puebla',
      'Cancún',
      'Mexico City'
    ],
    correctAnswer: 'Mexico City',
    website: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png',
  },
  {
    question: 'What is the capital of the United Kingdom?',
    answers: [
      'Liverpool',
      'Bristol',
      'London',
      'Glasgow'
    ],
    correctAnswer: 'London',
    website: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png',
  },
  {
    question: 'What is the capital of France?',
    answers: [
      'Nice',
      'Paris',
      'Lyon',
      'Toulouse',
    ],
    correctAnswer: 'Paris',
    website: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
  },
  {
    question: 'What is the capital of Italy?',
    answers: [
      'Florence',
      'Venice',
      'Milan',
      'Rome'
    ],
    correctAnswer: 'Rome',
    website: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
  }
];


let score=0;
let questNum = 0;
// //start quiz
// //on startQuizButton click hide start div
let button=document.querySelector('.startButton');
let quizQuestions = document.querySelector('.questionBox')
let startQuestion = document.querySelector('h1');
function startQuiz(){
  button.addEventListener('click', function () {
    button.style.display = 'none';
    quizQuestions.style.display = 'block';
    startQuestion.style.display = 'none';
    generateQuestion();
    document.querySelector('.questionNumber').innerHTML = questNum + 1;
  })
}

let radioButtons=document.querySelectorAll('.radios');
//generate question
function generateQuestion(){
  if(questNum<store.length){
  document.querySelector('h2').innerHTML = store[questNum].question
  document.querySelector('.question1').innerHTML = store[questNum].answers[0]
    radioButtons[0].value = store[questNum].answers[0]
  document.querySelector('.question2').innerHTML = store[questNum].answers[1]
    radioButtons[1].value = store[questNum].answers[1]
  document.querySelector('.question3').innerHTML = store[questNum].answers[2]
    radioButtons[2].value = store[questNum].answers[2]
  document.querySelector('.question4').innerHTML = store[questNum].answers[3]
    radioButtons[3].value = store[questNum].answers[3]
  }else{
    renderResults();
    restartGame();
  }
  }
generateQuestion();  

//user selects a radio button 
let form=document.querySelector('.questionForm');

let submitBtn=document.querySelector('.submitButton');
console.log(radioButtons);
console.log(form);
console.log(store[questNum].correctAnswer)
function userSelect(){
submitBtn.addEventListener('click',test)
}
//select function
let test = function submitAnswer(e) {
  e.preventDefault();
  console.log('running')
  for (let j = 0; j < radioButtons.length; j++) {
    if (radioButtons[j].checked) {
      if (radioButtons[j].value == store[questNum].correctAnswer) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
    }
  }
}
function rightAnswer(){
  rightResult();
  addScore(); 
}

function wrongAnswer(){
  wrongResult();
}

//right result
let next = document.querySelector('.nextButton');
let countryImg=document.querySelector('.countryImage');
console.log(next);
function rightResult(){
  let correctA = `${store[questNum].correctAnswer}`
  document.querySelector('img').src = store[questNum].website
  console.log(document.querySelector('img').src);
  countryImg.style.display = 'block'; 
  next.style.display = 'block';
  quizQuestions.style.display = 'none';
  startQuestion.style.display = 'block';
  startQuestion.innerHTML = `You are right!<br> The correct answer is ${correctA}`;
}
//wrong result
function wrongResult(){
  let correctA = `${store[questNum].correctAnswer}`
  document.querySelector('img').src = store[questNum].website
  countryImg.style.display = 'block';
  next.style.display = 'block';
  quizQuestions.style.display = 'none';
  startQuestion.style.display = 'block';
  startQuestion.innerHTML = `You are wrong. <br>The correct answer is ${correctA}`; 
}

//increment score 
function addScore() {
  score++;
  console.log(score);
  document.querySelector('.score').innerHTML = score;
}

//increment question number
function addQuestNum() {
  questNum++;
  document.querySelector('.questionNumber').innerHTML = questNum + 1;
}

//next question
function nextQuestion() {
  next.addEventListener('click', function () {
    countryImg.style.display = 'none';
    next.style.display = 'none';
    quizQuestions.style.display = 'block';
    startQuestion.style.display = 'none';
    addQuestNum();
    generateQuestion();
    userSelect();
  })
}


//render results
let resultImg = document.querySelector('.resultImage');
let restart=document.querySelector('.restartButton');
function renderResults(){
  document.querySelector('.questionNumber').innerHTML = questNum;
  quizQuestions.style.display = 'none';
  startQuestion.style.display = 'block';
  restart.style.display='block'
  if(score>=7){
    resultImg.style.display='block'
    resultImg.src ='https://thumbor.thedailymeal.com/260hkFEzsOuCmmxztIpZncts5c4=/774x516/https://www.theactivetimes.com/sites/default/files/uploads/0/0-shutterstock_397569799.jpg'
    startQuestion.innerHTML = `You know your countries!<br> Your score was ${score}/10`;
  } else if(score>4&&score<7){
    resultImg.style.display = 'block'
    resultImg.src = 'https://www.euroweeklynews.com/wp-content/uploads/2018/11/shutterstock_232923259-696x464.jpg'
    startQuestion.innerHTML = `You seem like you kind of know your stuff.<br> Your score was ${score}/10`;
  }else{
    resultImg.style.display = 'block'
    resultImg.src = 'https://www.gtitravel.com/wp-content/uploads/2017/06/Do-Travel-Agents-get-free-trips-1030x686.jpg'
    startQuestion.innerHTML = `Looks like you need to travel more.<br> Your score was ${score}/10`;
  }
  
}


//restart page

function restartGame(){
  restart.addEventListener('click',function(){
    location.reload();
  })
}


function runGame(){
  startQuiz();
  userSelect();
  nextQuestion();
}

runGame();