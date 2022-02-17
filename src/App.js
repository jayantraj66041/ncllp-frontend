import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Table from './components/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container">
          <div className="row my-4">
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route exact path='/login'>
                <LoginForm/>
              </Route>
              <Route exact path="/signup">
                <SignupForm/>
              </Route>
              <Route exact path="/dashboard">
                <Table/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
