export default function Footer({items}) {
  const itemsTotal = items.length
  const itemsChecked = items.filter((item) => item.checked).length
  const itemCheckedPercentage = itemsTotal ? Number(((itemsChecked / itemsTotal) * 100).toFixed(2)) : 0

  return (
      <footer className={'travel-list-footer'}>
        {itemsTotal ?
            (<div>🧳 You have {itemsTotal} on your list, and you already
              packed {itemsChecked} ({itemCheckedPercentage}%)</div>)
            :
            (<div>Start adding items to your packing list 🚀</div>)
        }
      </footer>
  )
}
