import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from "react-bootstrap/Dropdown";


function App() {
  return (
    <div className="App">
    <Container>
    <Row>
    <Col lg={12} xs={8}>
      <div class="black_bg"><h1>Migracode</h1></div>
    </Col>
    <Col lg={12} xs={4}>
      <div class="black_bg"><h1>Code</h1></div>
    </Col>
    <Col lg={12} xs={4}>
      <div class="black_bg"><h1>For Refugees</h1></div>
      <Button variant="danger">Know More</Button> 
    </Col>
    
  </Row>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    About
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Who we Are</Dropdown.Item>
    <Dropdown.Item href="#/action-2">What we are doing</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Help Us</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    
    </Container>
    </div>
  );
}

export default App;
