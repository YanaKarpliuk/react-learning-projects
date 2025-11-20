import {pizzaData} from "../data/data.js";
import Pizza from "./Pizza.jsx";

export default function Menu() {
  const pizzaList = pizzaData.map(({name, ingredients, price, photoName, soldOut}) => (
      <Pizza
          key={name}
          name={name}
          ingredients={ingredients}
          price={price}
          photo={photoName}
          soldOut={soldOut}
      />
  ))

  return (
      <main className='pizzas'>
        <h2>Our menu</h2>
        {pizzaList.length ?
            (
                <>
                  <div className='description'>
                    <p>
                      Authentic Italian cuisine. 6 creative dishes to choose from. All
                      from our stone oven, all organic, all delicious.
                    </p>
                  </div>
                  <div className='pizza-list'>
                    {pizzaList}
                  </div>
                </>
            ) :
            (
                <p className='empty-results'>
                  We're still working on our menu. Please come back later :)
                </p>
            )
        }

      </main>
  )
}
