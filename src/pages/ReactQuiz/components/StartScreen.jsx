import { useQuiz } from "../contexts/QuizContext.jsx";

export default function StartScreen() {
  const { questionsNum, dispatch } = useQuiz()

  return (
      <div className='start-screen'>
        <h2>Welcome to The React Quiz</h2>
        <p>
          {questionsNum} questions to start your React mastery
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
