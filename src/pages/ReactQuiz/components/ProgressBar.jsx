export default function ProgressBar({currentQuestion, totalQuestions, currentPoints, totalPoints, answer}) {
  return (
      <div className='progress-bar-wrapper'>
        <progress
            className={'progress-bar'}
            max={totalQuestions}
            value={currentQuestion + Number(answer !== null)}
        />
        <div className='data-wrapper'>
          <div className='data'>
            Question <strong>{currentQuestion + 1}</strong> / {totalQuestions}
          </div>
          <div className='data'>
            <strong>{currentPoints}</strong> / {totalPoints} points
          </div>
        </div>
      </div>
  )
}
