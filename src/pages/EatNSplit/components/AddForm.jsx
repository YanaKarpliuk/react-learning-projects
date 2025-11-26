import { useState } from "react";

export default function AddForm({addFriend, setIsAddFormOpen}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=499477')

  function submitForm(e) {
    e.preventDefault()
    addFriend(name, image);
    setIsAddFormOpen(false)
    setName('')
    setImage('https://i.pravatar.cc/48?u=499477')
  }

  return (
      <form className='add-friend-form' onSubmit={submitForm}>
        <div className='form-item form-input-text'>
          <label htmlFor='name'>Friend name</label>
          <input id='name' value={name} onInput={(e) => setName(e.target.value)} />
        </div>
        <div className='form-item form-input-text'>
          <label htmlFor='bill'>Image URL</label>
          <input id='image' value={image} onInput={(e) => setImage(e.target.value)} />
        </div>
        <div className='form-actions'>
          <input type='submit' value='Add' />
        </div>
      </form>
  )
}
