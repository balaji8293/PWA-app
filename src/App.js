import logo from './logo.svg';
import { Nav,Navbar,Container } from "react-bootstrap";
import './App.css';
import { Link,Route,BrowserRouter as Router, Routes,Switch } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import About from './About';
import React from 'react';
// import firebase from "./firebase"
import firebase from './firebase';

function App() {
  // React.useEffect(() => {
  // const msg= firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   })
  // })
  
  return (
    <div className="App">
      <Router>
       <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link to='/about'>About</Link></Nav.Link>
              <Nav.Link ><Link to='/users'>Users</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
            <Route element={<Home/>} path="/"></Route>
            <Route element={<About/>}path="/about"></Route>
            <Route element={<Users/>}path="/users"></Route>
            <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
