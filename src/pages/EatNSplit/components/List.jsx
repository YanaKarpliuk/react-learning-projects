import ListItem from "./ListItem.jsx";
import AddForm from './AddForm.jsx'
import { useState } from "react";

export default function List({friends, selectedFriend, setSelectedFriend, addFriend}) {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false)

  return (
      <div className='list-wrapper'>
        <ul className='list'>
          {friends.map((friend) => (
              <ListItem
                  key={friend.id}
                  friend={friend}
                  selectedFriend={selectedFriend}
                  setSelectedFriend={setSelectedFriend}
              />
          ))}
        </ul>
        {
          isAddFormOpen &&
            <AddForm
                addFriend={addFriend}
                setIsAddFormOpen={setIsAddFormOpen}
            />
        }
        <button
            className='add-btn'
            aria-label={isAddFormOpen ? 'Close' : 'Add friend'}
            onClick={() => setIsAddFormOpen(prev => !prev)}
        >
          {isAddFormOpen ? 'Close' : 'Add friend'}
        </button>
      </div>
  )
}
