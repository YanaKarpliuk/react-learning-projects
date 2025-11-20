import './pizzaMenu.scss';
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";

export default function PizzaMenu() {
  return (
      <div className='pizza-menu-page'>
        <Header title={'Fast react pizza Co.'}/>
        <Menu/>
        <Footer/>
      </div>
  )
}
