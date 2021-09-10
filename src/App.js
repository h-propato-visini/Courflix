import './App.css';
import React from 'react';
import Home from './Home'
import Categoria from './Categoria'
import Seleccion from './Seleccion'
import Reproductor from './Reproductor'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Home}/>
        <Route path='/categorie' component={Categoria}/>
        <Route path='/breaking-bad' component={Seleccion}/>
        <Route path='/reproductor' component={Reproductor}/>
      </Router>
    )
  }
}

export default App;
