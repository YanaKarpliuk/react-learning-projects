import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
  return (
      <section className='suggested-recipe-wrapper' aria-live='polite'>
        <h2>Chef Claude Recommends:</h2>
        <ReactMarkdown children={props.recipe} />
      </section>
  )
}
