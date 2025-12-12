export default function NextButton({ dispatch, index, quantity}) {
  if (index < quantity - 1) {
    return (
        <button
            className='btn-primary btn-next'
            aria-label='Next question'
            onClick={() => dispatch({type: 'nextQuestion'})}
        >
          Next
        </button>
    )
  }

  if (index === quantity - 1) {
    return (
        <button
            className='btn-primary btn-next'
            aria-label='Finish the quiz'
            onClick={() => dispatch({type: 'finish'})}
        >
          Finish
        </button>
    )
  }
}
