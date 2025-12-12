export default function StartScreen({quantity, dispatch}) {
  return (
      <div className='start-screen'>
        <h2>Welcome to The React Quiz</h2>
        <p>
          {quantity} questions to start your React mastery
        </p>
        <button
            className='btn-primary'
            aria-label='Lets start the React quiz'
            onClick={() => dispatch({type: 'start'})}
        >
          Let's start
        </button>
      </div>
  )
}
