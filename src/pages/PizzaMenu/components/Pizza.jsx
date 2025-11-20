export default function Pizza({name, ingredients, price, photo, soldOut}) {
  return (
      <div className={`pizza ${soldOut ? 'sold-out' : 'available'}`}>
        <div className='media-wrapper'>
          <img src={photo} alt={name}/>
        </div>
        <div className='content-wrapper'>
          <h3>{name}</h3>
          <div className='ingredient-list'>{ingredients}</div>
          <div className='additional-info'>{!soldOut ? price : 'SOLD OUT'}</div>
        </div>
      </div>
  )
}
