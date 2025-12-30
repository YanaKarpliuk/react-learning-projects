import { useQuiz } from "../contexts/QuizContext.jsx";

export default function Options({ question }) {
  const { dispatch, answer } = useQuiz()

  const hasAnswered = answer !== null

  return (
      <div className='options-wrapper'>
        {question.options.map((option, i) => (
            <button
                className={`btn-primary ${i === answer ? 'answer' : ''} ${
                    hasAnswered ? (
                        i === question.correctOption
                            ? 'correct'
                            : 'wrong'
                    ) : ''
                }`}
                key={option}
                disabled={hasAnswered}
                onClick={() => dispatch({ type: "newAnswer", payload: i })}
            >
              {option}
            </button>
        ))}
      </div>
  )
}
