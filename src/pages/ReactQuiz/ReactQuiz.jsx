import { useEffect } from "react";
import './reactQuiz.scss';
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorText from "./components/ErrorText.jsx";
import StartScreen from "./components/StartScreen.jsx";
import Question from "./components/Question";
import NextButton from "./components/NextButton.jsx";
import ProgressBar from "./components/ProgressBar";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import { useQuiz } from "./contexts/QuizContext.jsx";

export default function ReactQuiz() {
  const { status, answer } = useQuiz()

  useEffect(() => {
    document.title = 'The React Quiz'
  }, [])

  return (
      <div className={'react-quiz-page'}>
        <Header/>
        <Main>
          {status === 'loading' && <Loader local={true}/>}
          {status === 'error' && <ErrorText/>}
          {status === 'ready' && <StartScreen/>}
          {status === 'active' && (
              <>
                <ProgressBar/>
                <Question/>
                <div className='quiz-bottom'>
                  <Timer/>
                  {answer !== null && <NextButton/>}
                </div>
              </>
          )}
          {status === 'finished' && <FinishScreen/>}
        </Main>
      </div>
  )
}
