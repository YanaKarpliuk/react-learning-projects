export default function ListItem({friend, setSelectedFriend, selectedFriend}) {
  function handleFriendSelect() {
    if (selectedFriend && selectedFriend.id === friend.id) {
      setSelectedFriend(null)
    } else {
      setSelectedFriend(friend)
    }
  }

  return (
      <li className={`list-item-wrapper ${selectedFriend && selectedFriend.id === friend.id ? 'is-selected' : ''}`}>
        <div className='list-item'>
          <img src={friend.image} alt={friend.name}/>
          <div className='info-wrapper'>
            <div className='info-name'>{friend.name}</div>
            <div className='info-balance'>
              {friend.balance === 0
                  ? <span className='even'>You and {friend.name} are even</span>
                  : (friend.balance < 0
                          ? <span className='negative'>You owe {friend.name} {friend.balance * -1}€</span>
                          : <span className='positive'>{friend.name} owes you {friend.balance}€</span>
                  )
              }
            </div>
          </div>
        </div>
        <button
            onClick={handleFriendSelect}
            aria-label={selectedFriend && selectedFriend.id === friend.id ? `Close the ${friend.name}'s bill form` : `Select the ${friend.name}'s bill form`}>
          {selectedFriend && selectedFriend.id === friend.id ? 'Close' : 'Select'}
        </button>
      </li>
  )
}
