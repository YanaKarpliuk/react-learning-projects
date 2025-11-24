import { useState } from "react";

export default function ListActions({sortTravelItems, removeAllTravelItems}) {
  const [selectedValue, setSelectedValue] = useState('order');

  function handleSelectChange(e) {
    setSelectedValue(e.target.value);
    sortTravelItems(e.target.value)
  }

  return (
      <div className='travel-list-actions'>
        <div className='sort-by-wrapper'>
          <label htmlFor='sort-by' className='sr-only'>Sort by</label>
          <select name='sort-by' id='sort-by' value={selectedValue} onChange={handleSelectChange}>
            <option value='order'>Sort by input order</option>
            <option value='quantity'>Sort by input quantity</option>
            <option value='name'>Sort by input name</option>
            <option value='packed'>Sort by packed status</option>
          </select>
        </div>
        <div className='clear-btn-wrapper'>
          <button onClick={removeAllTravelItems}>Clear list</button>
        </div>
      </div>
  )
}
