import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Trainer from "./components/Trainer/Trainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditTrainer from "./components/Trainer/EditTrainer/EditTrainer";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CreateTrainer from "./components/Trainer/CreateTrainer/CreateTrainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/">
            <Trainer />
          </Route>
          <Route exact path="/edit/:id">
            <EditTrainer />
          </Route>
          <Route exact path="/create">
            <CreateTrainer/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
