import './styles.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from './pages/page1';
import Page2 from './pages/page2';

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='company/company1' element={<Page />} />
        <Route path='company/company2' element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}