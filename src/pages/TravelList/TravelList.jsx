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
      checked: true
    },
    {
      id: nanoid(),
      name: 'Socks',
      quantity: 12,
      checked: false
    },
    {
      id: nanoid(),
      name: 'Charger',
      quantity: 1,
      checked: false
    }
  ])
  const [sortValue, setSortValue] = useState('order');

  function updateSortValue(sort) {
    setSortValue(sort);
  }

  function addTravelItem(name, quantity) {
    setTravelItems((prev) => (
        [
          ...prev,
          {
            id: nanoid(),
            name,
            quantity,
            checked: false
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

    if (userConfirmed) setTravelItems([])
  }

  let sortedTravelItems = [...travelItems]

  sortedTravelItems.sort((a, b) => {
    switch (sortValue) {
      case 'name':
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      case 'quantity':
        return Number(a.quantity) - Number(b.quantity)
      case 'packed':
        return Number(a.checked) - Number(b.checked)
      default:
        return travelItems
    }
  });

  return (
      <div className={'travel-list-page'}>
        <Header/>
        <main className={'travel-main'}>
          <Form
              addTravelItem={addTravelItem}
          />
          <List
              items={sortedTravelItems}
              removeTravelItem={removeTravelItem}
              setTravelItems={setTravelItems}
          />
          <ListActions
              sortValue={sortValue}
              updateSortValue={updateSortValue}
              removeAllTravelItems={removeAllTravelItems}
          />
        </main>
        <Footer
            items={travelItems}
        />
      </div>
  )
}
