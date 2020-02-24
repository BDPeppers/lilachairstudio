import React from 'react';
import './styles/main.sass'

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
        <Switch>
          {/* Route Path doesn't work on github /Home */}
          <Route path="(/|/Home|/lilachairstudio|/lilachairstudio/Home)" exact component={Home}/>
          <Route path="(/About|/lilachairstudio/About)" exact component={About}/>
          <Route path="(/Services|/lilachairstudio/Services)" exact component={Services}/>
          <Route path="(/Gallery|/lilachairstudio/Gallery" exact component={Gallery}/>
          <Route path="(/Book|/lilachairstudio/Book)" exact component={Book}/>
        </Switch>
      </Router>

    </main>
  );
}

export default App;
