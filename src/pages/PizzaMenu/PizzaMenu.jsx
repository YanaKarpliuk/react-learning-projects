import './pizzaMenu.scss';
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect } from "react";

export default function PizzaMenu() {
  useEffect(() => {
    document.title = 'Pizza Menu'

    return function () {
      document.title = 'My React Journey'
    }
  }, [])

  return (
      <div className='pizza-menu-page'>
        <Header title={'Fast react pizza Co.'}/>
        <Menu/>
        <Footer/>
      </div>
  )
}
