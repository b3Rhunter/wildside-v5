import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);

box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #dd80ed;
  }
`;


const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <div className="background"></div>
      <div className="logo"></div>
      <Global styles={globalStyles} />
      {/*<Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
  </Nav>
      </Header>*/}
      <Main>
        <a href='http://thewildside.mylocalsalon.com/OnlineBooking/' target="_blank" rel="noreferrer">
        <button className="bookBtn">Book Appointment</button>
        </a>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Main>
    </Router>
  );
}


export default App;
