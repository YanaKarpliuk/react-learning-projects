export default function ListItem({quantity, name, checked, id, removeTravelItem, setTravelItems}) {
  function handleInputChange() {
    setTravelItems(prev => prev.map(item => (
        item.id === id
            ? {...item, checked: !item.checked}
            : item
    )))
  }

  return (
      <li className='travel-list-item'>
        <div className='travel-list-item-wrapper'>
          <input
              className={`${checked ? 'checked' : 'not-checked'}`}
              type='checkbox'
              value={checked}
              id={id}
              checked={checked}
              onChange={handleInputChange}
          />
          <label htmlFor={id}>{`${quantity} ${name}`}</label>
        </div>
        <button onClick={() => removeTravelItem(id)} aria-label='Remove travel item'>❌</button>
      </li>
  )
}
