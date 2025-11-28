import { useState } from "react";

export default function Form({setFriends, selectedFriend}) {
  const [bill, setBill] = useState(0)
  const [yourExpense, setYourExpense] = useState(0)
  const [paying, setPaying] = useState('you')

  const friendExpense = bill - yourExpense

  if (yourExpense > bill) setYourExpense(bill)

  function submitForm(e) {
    e.preventDefault()

    setFriends(prev => (
        prev.map(item => (
            item.id === selectedFriend.id
                ? {
                    ...item,
                    balance: paying === 'you'
                        ? item.balance + friendExpense
                        : item.balance - yourExpense
                  }
                : item
        ))
    ))

    setBill(0)
    setYourExpense(0)
    setPaying('you')
  }

  return (
      <form className='split-bill-form' onSubmit={submitForm}>
        <h2>
          Split a bill with {selectedFriend.name}
        </h2>
        <div className='form-item form-input-number'>
          <label htmlFor='bill'>Bill value</label>
          <input
              type='number'
              id='bill'
              value={bill.toString()}
              onInput={(e) => {
                if (Number(e.target.value) >= 0) setBill(Number(e.target.value))
              }}
          />
        </div>
        <div className='form-item form-input-number'>
          <label htmlFor='yourExpense'>Your expense</label>
          <input
              type='number'
              id='yourExpense'
              value={yourExpense.toString()}
              onInput={(e) => {
                if (Number(e.target.value) >= 0 && Number(e.target.value) <= bill) setYourExpense(Number(e.target.value))
              }}
          />
        </div>
        <div className='form-item form-input-number'>
          <label htmlFor='friendExpense'>{selectedFriend.name}'s expense</label>
          <input
              type='number'
              id='friendExpense'
              value={friendExpense}
              readOnly={true}
          />
        </div>
        <div className='form-item form-input-select'>
          <label htmlFor='paying'>Who is paying the bill?</label>
          <select
              value={paying}
              onChange={(e) => setPaying(e.target.value)}>
            <option value='you'>You</option>
            <option value='friend'>{selectedFriend.name}</option>
          </select>
        </div>
        <div className='form-actions'>
          <input type='submit' value='Split bill' />
        </div>
      </form>
  )
}
