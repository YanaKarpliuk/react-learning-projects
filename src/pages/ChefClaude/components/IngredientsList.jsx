export default function IngredientsList(props) {
  return (
      <section>
        <h1 className={'ingredients-title'}>Ingredients on hand:</h1>
        <ul className="ingredients-list">{
          props.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        {props.ingredients.length > 3 &&
            <div className="get-recipe-container" ref={props.recipeSection}>
              <div className='get-recipe-content'>
                <h2 className='get-recipe-title'>Ready for a recipe?</h2>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button
                  className={'Get a recipe'}
                  onClick={props.getRecipe}>
                Get a recipe
              </button>
            </div>
        }
      </section>
  )
}
