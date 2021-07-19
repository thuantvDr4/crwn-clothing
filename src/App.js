// import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
//
import { Router } from "./routes/RootRouter";
import Header from "./libs/components/header/Header.Component";
import useFirebase from "./firebase/firebase.hook";

function App() {
  // khoi tao firebase
  const { createCollectionsData } = useFirebase();
  //
  useEffect(() => {
    // createCollectionsData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
