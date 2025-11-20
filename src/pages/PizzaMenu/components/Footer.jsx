export default function Footer() {
  const currentHour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = currentHour >= openHour && currentHour < closeHour

  return (
      <footer className='pizza-footer'>
        {isOpen ?
            (
                <div className="order">
                  <p>
                    We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
                  </p>
                  <button className="btn">Order</button>
                </div>
            )
            : (
                <p>
                  We are currently closed. <br/> Our operating hours are between {openHour}:00 and {closeHour}:00.
                </p>
            )
        }
      </footer>
  )
}
