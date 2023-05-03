import {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import bgDesktop from "./images/wildSide_bg_desktop.png";
import bgMobile from "./images/wildSide_bg_mobile.png";
import logo from "./images/wildSide_logo.png";


import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

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

const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgb(123,0,255);
background: linear-gradient(180deg, rgba(123,0,255,1) 0%, rgba(246,9,241,1) 100%);
`;

const LoadingWheel = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;


function App() {

  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imagePaths = [
    bgDesktop,
    bgMobile,
    logo,
  ];
  
  

  useEffect(() => {
    const preloadImages = async () => {
      const loadAllImages = imagePaths.map((src) =>
        new Promise((resolve, reject) => {
          const image = new Image();
          image.src = src;
          image.onload = resolve;
          image.onerror = reject;
        })
      );
      try {
        await Promise.all(loadAllImages);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
      }
    };
    preloadImages();
  }, []);

  return (
    <Router>
      {imagesLoaded ? (
        <>
          <div className="background"></div>
          <div className="logo"></div>
          <Global styles={globalStyles} />
          <Main>
            <a
              href="http://thewildside.mylocalsalon.com/OnlineBooking/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bookBtn">Book Appointment</button>
            </a>
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Main>
        </>
      ) : (
        <LoadingScreen>
        <LoadingWheel />
      </LoadingScreen>
      )}
    </Router>
  );
}


export default App;
