import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart/Cart';
import { AppProvider } from './context';
import Header from './Header/Header';
import Notifications from './Notifications';
import Products from './Products/Products';

function App() {
  return (
    
    <AppProvider>
      <Header/>
      <Container fluid>
        <Row>
          <Col className='p-5'>
            <Notifications />    
            <Routes>
              <Route path="/" element={ <Products/> }/>
              <Route path="/cart" element={ <Cart/> } />
            </Routes>
          </Col>
        </Row>
      </Container>
    </AppProvider>
  );
}

export default App;
