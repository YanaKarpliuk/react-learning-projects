export default function ListItem({quantity, name, checked, id, removeTravelItem, setTravelItems}) {
  return (
      <li className='travel-list-item'>
        <div className='travel-list-item-wrapper'>
          <input
              className={`${checked ? 'checked' : 'not-checked'}`}
              type='checkbox'
              value={name.toLowerCase()}
              id={id}
              checked={checked}
              onChange={() => setTravelItems(prev => prev.map(item => {
                return item.id === id
                    ? {...item, checked: !item.checked}
                    : item
              }))}
          />
          <label htmlFor={id}>{`${quantity} ${name}`}</label>
        </div>
        <button onClick={() => removeTravelItem(id)} aria-label='Remove travel item'>❌</button>
      </li>
  )
}
