// let questions= [
// {
//     question1 :'Burj Khalifa was found in which state?',
//     ans1 : 'Sharjah',
//     ans1 : 'AbuDahbi',
//     ans1 : 'Bubai',
//     ans1 : 'Oman',
//     correct:'Dubai',
// },
// {
//     question2 : 'Who is the first Governer Generl of Pakistan?',

// }
// ]
   
// window.addEventListener('load',function(a){
// a.preventDefault();
// let quizcontainer=document.getElementById('quizcontainer');
//  startquiz(quizcontainer);


// });
// function startquiz(quizcontainer)
// {
//     quizcontainer.innerHTML =' <button id="btn">Start Quiz</button>';
//     let startbtn = document.getElementById('btn');
//     startbtn.addEventListener('click',function () {
        
    
//     showquestion();
// })
// }



        let currentQuestionIndex = 0;
        const questions = [
            {
                question: 'Burj Khalifa is located in which city?',
                answers: ['Sharjah', 'Abu Dhabi', 'Dubai', 'Oman'],
                correctAnswer: 'Dubai',
            },
            {
                question: 'Who was the first Governor-General of Pakistan?',
                answers: ['Liaquat Ali Khan', 'Quaid-e-Azam Muhammad Ali Jinnah', 'Allama Iqbal', 'Iskander Mirza'],
                correctAnswer: 'Quaid-e-Azam Muhammad Ali Jinnah',
            },
            {
                question: 'What is the capital of France?',
                answers: ['Berlin', 'Madrid', 'London', 'Paris'],
                correctAnswer: 'Paris',
            },
            {
                question: 'Which planet is known as the Red Planet?',
                answers: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
                correctAnswer: 'Mars',
            },
            {
                question: 'What is the chemical symbol for gold?',
                answers: ['Go', 'Au', 'Ag', 'Gd'],
                correctAnswer: 'Au',
            },
        ];

        window.addEventListener('load', function () {
            let quizContainer = document.getElementById('quizcontainer');
            let startBtn = document.getElementById('startBtn');
            startBtn.addEventListener('click', function () {
                startQuiz();
            });

            function startQuiz() {
                startBtn.style.display = 'none';
                showQuestion(currentQuestionIndex);
            }

            function showQuestion(questionIndex) {
                let question = questions[questionIndex];
                if (!question) {
                    // All questions answered
                    quizContainer.innerHTML = '<h2>Quiz Complete</h2>';
                    return;
                }

                let questionText = document.createElement('h2');
                questionText.textContent = question.question;
                quizContainer.innerHTML = '';
                quizContainer.appendChild(questionText);

                for (let answer of question.answers) {
                    let answerButton = document.createElement('button');
                    answerButton.textContent = answer;
                    answerButton.addEventListener('click', function () {
                        checkAnswer(answer, question.correctAnswer);
                    });
                    quizContainer.appendChild(answerButton);
                }
            }

            function checkAnswer(selectedAnswer, correctAnswer) {
                if (selectedAnswer === correctAnswer) {
                    alert('Correct!');
                } else {
                    alert('Wrong!');
                }

                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            }
        });
 

