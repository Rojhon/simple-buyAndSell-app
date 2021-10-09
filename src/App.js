import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Users from './components/Users';
import Index from './components/Index';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" component={Users} exact/>
          <Route path="/user/:id" component={Index} exact/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
