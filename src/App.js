import React from "react";
import Router from "./routes";
//import theme from "./Pallete";
import ThemeProvider from 'styled-components';
import Navbar from "./Components/Common/NavBar";

function App() {
  return (
    <div style={{margin:0,padding:0}}>
        <Navbar />
        <Router />
    </div>
  );
}

export default App;
