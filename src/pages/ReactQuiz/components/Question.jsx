import Options from "./Options.jsx";

export default function Question({question, dispatch, answer}) {
  return (
      <div className='question-wrapper'>
        <h3>{question.question}</h3>
        <Options question={question} dispatch={dispatch} answer={answer} />
      </div>
  )
}
