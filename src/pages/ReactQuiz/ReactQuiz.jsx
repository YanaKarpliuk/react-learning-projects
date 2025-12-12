import { useEffect, useReducer } from "react";
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

const initialState = {
  questions: [],
  status: 'loading', // or 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null
}

const SEC_PER_QUESTION = 30

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SEC_PER_QUESTION
      }
    case 'newAnswer':
      const question = state.questions[state.index]

      return {
        ...state,
        answer: action.payload,
        points: question.correctOption === action.payload
            ? state.points + question.points
            : state.points
      }
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      }
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore: state.points > state.highscore ? state.points : state.highscore
      }
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
        highscore: state.highscore
      }
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining < 1 ? 'finished' : 'active'
      }
    default:
      throw new Error('Action unknown')
  }
}

export default function ReactQuiz() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {questions, status, index, answer, points, highscore, secondsRemaining} = state

  const questionsNum = questions.length
  const totalPoints = questions.reduce((acc, question) => question.points + acc, 0)

  useEffect(() => {
    document.title = 'The React Quiz'

    async function fetchQuestions() {
      try {
        const res = await fetch('http://localhost:8000/questions')
        if (!res.ok) throw new Error("Something went wrong with fetching questions")

        const data = await res.json()
        if (data.Response === 'False') throw new Error("Questions not found")

        dispatch({type: 'dataReceived', payload: data})
      } catch (err) {
        dispatch({type: 'dataFailed'})
      }
    }

    fetchQuestions()
  }, [])

  return (
      <div className={'react-quiz-page'}>
        <Header/>
        <Main>
          {status === 'loading' && <Loader local={true}/>}
          {status === 'error' && <ErrorText/>}
          {status === 'ready' && <StartScreen quantity={questionsNum} dispatch={dispatch}/>}
          {status === 'active' && (
              <>
                <ProgressBar
                    currentQuestion={index}
                    totalQuestions={questionsNum}
                    currentPoints={points}
                    totalPoints={totalPoints}
                    answer={answer}
                />
                <Question
                    question={questions[index]}
                    dispatch={dispatch}
                    answer={answer}
                />
                <div className='quiz-bottom'>
                  <Timer dispatch={dispatch} seconds={secondsRemaining}/>
                  {answer !== null &&
                      <NextButton
                          dispatch={dispatch}
                          index={index}
                          quantity={questionsNum}
                      />}
                </div>

              </>
          )}
          {status === 'finished' &&
              <FinishScreen
                  points={points}
                  maxPoints={totalPoints}
                  highscore={highscore}
                  dispatch={dispatch}
              />}
        </Main>
      </div>
  )
}
