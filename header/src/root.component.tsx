import { Link, NavLink, BrowserRouter } from 'react-router-dom'
import './styles.css'
export default function Root(props) {
  return (
    <div>
      <BrowserRouter basename='/'>
        <Link to="/">App 1</Link>
        <Link to="/company/company1"> App 2 page 1</Link>
        <Link to="/company/company2"> App 2 page 2</Link>
      </BrowserRouter>
    </div >
  )
}
