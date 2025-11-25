export default function ListActions({sortValue, updateSortValue, removeAllTravelItems}) {
  function handleSelectChange(e) {
    updateSortValue(e.target.value);
  }

  return (
      <div className='travel-list-actions'>
        <div className='sort-by-wrapper'>
          <label htmlFor='sort-by' className='sr-only'>Sort by</label>
          <select name='sort-by' id='sort-by' value={sortValue} onChange={handleSelectChange}>
            <option value='order'>Sort by input order</option>
            <option value='quantity'>Sort by input quantity</option>
            <option value='name'>Sort by input name</option>
            <option value='packed'>Sort by packed status</option>
          </select>
        </div>
        <div className='clear-btn-wrapper'>
          <button onClick={removeAllTravelItems} aria-label='Clear all travel items'>Clear list</button>
        </div>
      </div>
  )
}
