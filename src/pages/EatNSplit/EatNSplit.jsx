import './eatNSplit.scss';
import Form from "./components/Form.jsx";
import List from "./components/List";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const initialData = [
  {
    id: nanoid(),
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: nanoid(),
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: nanoid(),
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function EatNSplit() {
  const [friends, setFriends] = useState(initialData)
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [isFirstRender, setIsFirstRender] = useState(true)

  function addFriend(name, img) {
    setFriends(prev => (
        [...prev,
          {
            id: nanoid(),
            name: name,
            image: img,
            balance: 0,
          }
        ]
    ))
  }

  // Don't render on initial page load.
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      setSelectedFriend(friends[friends.length - 1])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friends.length])

  useEffect(() => {
    document.title = 'Eat-\'N-Split'

    return function () {
      document.title = 'My React Journey'
    }
  }, [])

  return (
      <div className={'eat-split-page'}>
        <main>
          <List
              friends={friends}
              selectedFriend={selectedFriend}
              setSelectedFriend={setSelectedFriend}
              addFriend={addFriend}
          />
          {selectedFriend &&
              <Form
                  // key for resetting the state in the form
                  // otherwise bill value will be the same for all friends
                  // key tells the diffing operation that this should be the new form for each friend
                  key={selectedFriend.id}
                  setFriends={setFriends}
                  selectedFriend={selectedFriend}
              />
          }
        </main>
      </div>
  )
}
