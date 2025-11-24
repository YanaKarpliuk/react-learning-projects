import './travelList.scss';
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List";
import ListActions from "./components/ListActions";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function TravelList() {
  const [travelItems, setTravelItems] = useState([
    {
      id: nanoid(),
      name: 'Passports',
      quantity: 2,
      checked: true,
      date: '2025-11-24T11:30:26.445Z'
    },
    {
      id: nanoid(),
      name: 'Socks',
      quantity: 12,
      checked: false,
      date: '2025-11-24T11:31:26.445Z'
    },
    {
      id: nanoid(),
      name: 'Charger',
      quantity: 1,
      checked: false,
      date: '2025-11-24T11:32:26.445Z'
    }
  ])

  function addTravelItem(name, quantity) {
    setTravelItems((prev) => (
        [
          ...prev,
          {
            id: nanoid(),
            name,
            quantity,
            checked: false,
            date: new Date().toISOString()
          }
        ]
    ))
  }

  function removeTravelItem(id) {
    setTravelItems((prev) => (
        prev.filter((item) => item.id !== id)
    ))
  }

  function removeAllTravelItems() {
    let userConfirmed = confirm("Are you sure you want to delete all items?");

    if (userConfirmed) {
      setTravelItems([])
    }
  }

  function sortTravelItems(sort) {
    const newTravelItemsArr = [...travelItems]

    newTravelItemsArr.sort((a, b) => {
      switch (sort) {
        case 'name':
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        case 'quantity':
          return Number(a.quantity) - Number(b.quantity)
        case 'packed':
          return Number(a.checked) - Number(b.checked)
        default:
          return a.date.localeCompare(b.date);
      }
    });

    setTravelItems(newTravelItemsArr)
  }

  return (
      <div className={'travel-list-page'}>
        <Header/>
        <main className={'travel-main'}>
          <Form
              addTravelItem={addTravelItem}
          />
          <List
              items={travelItems}
              removeTravelItem={removeTravelItem}
              setTravelItems={setTravelItems}
          />
          <ListActions
              sortTravelItems={sortTravelItems}
              removeAllTravelItems={removeAllTravelItems}
          />
        </main>
        <Footer
            items={travelItems}
        />
      </div>
  )
}
