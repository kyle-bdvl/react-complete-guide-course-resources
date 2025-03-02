import quizCompleteImage from '../assets/quiz-complete.png'
import QUESTIONS from '../question';

export default function Summary({userAnswers}){

  const skippedAnswers = userAnswers.filter(answer => answer === null);
  const correctAnswers = userAnswers.fiter((answer,index) => answer === QUESTIONS[index].answers[0]);

  const skippedAnswersShare = Math.round(skippedAnswers.length / userAnswers.length * 100);
  const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length)*100);

  const wrongAnswerShare = 100 - skippedAnswers - correctAnswersShare;

  return(
    <div id='summary'>
       <img src={quizCompleteImage} alt="Trophy Icon" />
       <h2>Quiz Completed!</h2>
       <div id="summary-stats"></div>
         <p>
            <span className="number">{skippedAnswersShare}%</span>
            <span className="text">skipped</span>
         </p>
         <p>
            <span className="number">{correctAnswersShare}%</span>
            <span className="text">answered correct</span>
         </p>
         <p>
            <span className="number">{wrongAnswerShare}%</span>
            <span className="text">answered incorrectly</span>
         </p>
         <ol>
            {userAnswers.map((answer, index)=>{
              let cssClass = 'user-answer';

              if(answer === null){
                cssClass += 'skipped';
              }
              else if(answer === QUESTIONS[index].answers[0]){
                cssClass +=' correct';
              }
              else {
                cssClass += ' wrong';
              }

              return (
                <li key={index}>
                <h3>{index+ 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? 'skipped'}</p>
              </li>
              );
            })}
         </ol>
    </div>


  );
}