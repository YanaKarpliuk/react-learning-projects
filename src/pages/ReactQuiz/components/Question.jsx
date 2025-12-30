import Options from "./Options.jsx";
import { useQuiz } from "../contexts/QuizContext.jsx";

export default function Question() {
  const { questions, index } = useQuiz()
  const question = questions[index]

  return (
      <div className='question-wrapper'>
        <h3>{question.question}</h3>
        <Options question={question}/>
      </div>
  )
}
