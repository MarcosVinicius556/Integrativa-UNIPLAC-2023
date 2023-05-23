import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/HeaderComponent/Header';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {

  return (
    <div className="app">
      <Header />
      <div className="page-container">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  )
}

export default App
