// import logo from "./logo.svg";
import "./App.css";
//
import { Router } from "./routes/RootRouter";
import Header from "./libs/components/header/Header.Component";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
