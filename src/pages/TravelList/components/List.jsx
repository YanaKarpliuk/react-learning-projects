import ListItem from "./ListItem";

export default function List({items, removeTravelItem, setTravelItems}) {
  return (
      <div className='travel-list-items' aria-live="polite">
        <ul>
          {items.map((item) => (
              <ListItem
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  checked={item.checked}
                  id={item.id}
                  removeTravelItem={removeTravelItem}
                  setTravelItems={setTravelItems}
              />
          ))}
        </ul>
      </div>
  )
}
