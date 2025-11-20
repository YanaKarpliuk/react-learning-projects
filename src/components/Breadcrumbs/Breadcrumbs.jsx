import { Link } from 'react-router-dom';
import './breadcrumbs.scss'

export default function Breadcrumbs() {
  return (
      <div className='breadcrumbs'>
        <Link to="/" className="breadcrumbs-link">
          Back Home
        </Link>
      </div>
  )
}
