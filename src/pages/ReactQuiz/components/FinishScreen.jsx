export default function FinishScreen({points, maxPoints, highscore, dispatch}) {
  const percentage = (points / maxPoints) * 100

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍️";

  return (
      <div className='results-wrapper'>
        <p className='results'> {emoji} You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percentage)}%)</p>
        <p className='highscore'>(Highscore: {highscore} points)</p>
        <button
            className='btn-primary'
            aria-label='Restart the quiz'
            onClick={() => dispatch({type: 'restart'})}
        >
          Restart quiz
        </button>
      </div>
  )
}
