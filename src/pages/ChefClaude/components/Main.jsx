import { useState, useRef, useEffect } from 'react';
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipeFromMistral } from "../ai.js";

export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState('')
  const recipeSection = useRef(null)

  function addIngredients(formData) {
    setIngredients(prev => [...prev, formData.get('ingredient')])
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

  // Scroll to recipe section when recipe is ready
  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipe])

  return (
      <main className={'chef-claude-main'}>
        <form action={addIngredients} className="add-ingredient-form">
          <input
              type="text"
              placeholder="e.g. oregano"
              aria-label="Add ingredient"
              name={"ingredient"}
          />
          <button
              className={'add-ingredient-btn'}
              aria-label={'Add ingredient'}>
            Add ingredient
          </button>
        </form>
        {ingredients.length > 0 &&
            <IngredientsList
                ingredients={ingredients}
                getRecipe={getRecipe}
                recipeSection={recipeSection}
            />}
        {recipe && <ClaudeRecipe recipe={recipe}/>}
      </main>
  )
}
