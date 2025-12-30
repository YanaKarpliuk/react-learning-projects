import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext()

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

function QuizProvider({ children }) {
  const [{
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining
  }, dispatch] = useReducer(reducer, initialState)

  const questionsNum = questions.length
  const totalPoints = questions.reduce((acc, question) => question.points + acc, 0)

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch('http://localhost:8000/questions')
        if (!res.ok) throw new Error("Something went wrong with fetching questions")

        const data = await res.json()
        if (data.Response === 'False') throw new Error("Questions not found")

        dispatch({ type: 'dataReceived', payload: data })
      } catch (err) {
        dispatch({ type: 'dataFailed' })
        throw new Error(err.message)
      }
    }

    fetchQuestions()
  }, [])

  return (
      <QuizContext.Provider value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        questionsNum,
        totalPoints,
        dispatch
      }}>
        {children}
      </QuizContext.Provider>
  )
}

function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) throw new Error("QuizContext used outside of QuizProvider")
  return context
}

export { QuizProvider, useQuiz }
