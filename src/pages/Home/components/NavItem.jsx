import { NavLink } from 'react-router-dom';

export default function NavItem({ link, name }) {
  return (
      <li>
        <NavLink to={`/${link}`} end>{name}</NavLink>
      </li>
  )
}
