import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/HeaderComponent/Header';
import FooterComponent from './components/FooterComponent/FooterComponent';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <div className="app">
        <Header />
        {/* <Container fluid> */}
          <div className="page-container">
            <Outlet />
          </div>
        {/* </Container> */}
        <FooterComponent />
      </div>
  )
}

export default App
