import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Servisi from "./components/pages/Servisi";
import Kontakt from "./components/pages/Kontakt";
import Proizvodi from "./components/pages/Proizvodi";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/servisi" exact component={Servisi} />
          <Route path="/kontakt" exact component={Kontakt} />
          <Route path="/proizvodi" exact component={Proizvodi} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
