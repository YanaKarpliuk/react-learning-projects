import './reactQuiz.scss';
import { useEffect } from "react";

export default function ReactQuiz() {
  useEffect(() => {
    document.title = 'React Quiz'

    return function () {
      document.title = 'My React Journey'
    }
  }, [])

  return (
      <div className={'react-quiz-page'}>
        ReactQuiz
      </div>
  )
}
