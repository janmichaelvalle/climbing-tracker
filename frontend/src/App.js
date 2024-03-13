import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AppNavbar from './components/AppNavBar';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
    <Container fluid>
    <AppNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      </Container>
      </Router>
     
  );
}

export default App;
