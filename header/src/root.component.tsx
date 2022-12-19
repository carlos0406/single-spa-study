import { Link, NavLink, BrowserRouter } from 'react-router-dom'
import './styles.css'
export default function Root(props) {
  return (
    <div>
      <BrowserRouter basename='/'>
        <Link to="/company"> company</Link>
        <Link to="/company2"> company2</Link>
        <Link to="/"> Home</Link>
      </BrowserRouter>
    </div >
  )
}
