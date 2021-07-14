// import logo from "./logo.svg";
import "./App.css";
//
import { Router } from "./routes/RootRouter";
import Header from "./libs/components/header/Header.Component";
import useFirebase from "./firebase/firebase.hook";

function App() {
  const { currentUser } = useFirebase();
  console.log("[currentUser]---", currentUser);

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
