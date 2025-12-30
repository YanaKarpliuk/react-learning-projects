import { useQuiz } from "../contexts/QuizContext.jsx";

export default function NextButton() {
  const { dispatch, index, questionsNum } = useQuiz()

  if (index < questionsNum - 1) {
    return (
        <button
            className='btn-primary btn-next'
            aria-label='Next question'
            onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
    )
  }

  if (index === questionsNum - 1) {
    return (
        <button
            className='btn-primary btn-next'
            aria-label='Finish the quiz'
            onClick={() => dispatch({ type: 'finish' })}
        >
          Finish
        </button>
    )
  }
}
