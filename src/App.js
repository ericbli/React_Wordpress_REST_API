import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Books from './components/Books';
import BookPage from './components/BookPage';
import './App.css';

class App extends Component {
  render() {
    return (

<Router>
<Fragment>
  <Route exact path="/" component={Books} />
  <Route exact path="/book/:id" component={BookPage} />
</Fragment>

</Router>





    //   <div className="App">
    //   <Books/>
    //  </div>

    );
  }
}

export default App;
