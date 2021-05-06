import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Cart from './components/Cart';
import {Provider} from "react-redux"
import store from './store';
import Details from './components/Details';
import Error from './components/Error';
import {Redirect} from 'react-router-dom'


function App() {
  return (
    <Router className="App"> 
    {/* store is come from index.js not main one*/ }
    <Provider store={store}>
    <Nav />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cart" exact component={Cart} /> 
    <Route path="/details/:id" exact component={Details} />
    <Route path='/404' component={Error} />
    <Redirect from='*' to='/404' />

    </Switch>

    </Provider>
    </Router>
  );
}

export default App;
 