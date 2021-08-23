import './App.css';
import React from 'react';
import Home from './Home'
import Categoria from './Categoria'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Home}/>
        <Route path='/categorie' component={Categoria}/>
      </Router>
    )
  }
}

export default App;
