import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container">
          <div className="row my-4">
            <Switch>
              <Route path='/login'>
                <LoginForm/>
              </Route>
              <Route path="/signup">
                <SignupForm/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
