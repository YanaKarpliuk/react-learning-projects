import { useState } from "react";

export default function Form({addTravelItem}) {
  const [quantityValue, setQuantityValue] = useState('1')
  const [textValue, setTextValue] = useState('')

  function submitForm(e) {
    e.preventDefault()
    if (!e.target.travelItem.value) return;
    addTravelItem(e.target.travelItem.value, e.target.quantity.value)
    setQuantityValue('1')
    setTextValue('')
  }

  return (
      <form className='travel-list-form' onSubmit={submitForm}>
        <div className='text'>
          What do you need for your 😍 trip?
        </div>
        <div className='form-item form-input-number'>
          <label htmlFor='quantity'></label>
          <input type='number' id='quantity' value={quantityValue} onInput={(e) => setQuantityValue(e.target.value > 0 ? e.target.value : '1')} />
        </div>
        <div className='form-item form-input-text'>
          <label htmlFor='travelItem'></label>
          <input type='text' id='travelItem' placeholder='Item...' value={textValue} onInput={(e) => setTextValue(e.target.value)}/>
        </div>
        <div className='form-actions'>
          <input type='submit' value='Add' id='submit-btn'/>
        </div>
      </form>
  )
}
