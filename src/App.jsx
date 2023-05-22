import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/HeaderComponent/Header';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {

  return (
    <div className="app">
      <Header />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App
