import React from 'react';
import './styles/main.sass'

//import components
import Header from './components/features/header';

//SEO

//React Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//React Routes
import About from './components/pages/about';
import Home from './components/pages/home';
import Gallery from './components/pages/gallery';
import Services from './components/pages/services';
import Book from './components/pages/book';


function App() {
  return (
    <main className="App">
      <Router>
        <Home/>
        <Switch>
          <Route path="(/|/Home)" exact component={Home}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Services" exact component={Services}/>
          <Route path="/Gallery" exact component={Gallery}/>
          <Route path="/BookAnAppointment" exact component={Book}/>
        </Switch>

      </Router>

    </main>
  );
}

export default App;
