import { useQuiz } from "../contexts/QuizContext.jsx";

export default function ProgressBar() {
  const { questionsNum, index, points, totalPoints, answer } = useQuiz()

  return (
      <div className='progress-bar-wrapper'>
        <progress
            className={'progress-bar'}
            max={questionsNum}
            value={index + Number(answer !== null)}
        />
        <div className='data-wrapper'>
          <div className='data'>
            Question <strong>{index + 1}</strong> / {questionsNum}
          </div>
          <div className='data'>
            <strong>{points}</strong> / {totalPoints} points
          </div>
        </div>
      </div>
  )
}
