import React from 'react';
import './styles/main.sass'

////SEO
//React Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import ScrollToTop from 'react-router-scroll-top';

//React Routes
import About from './components/pages/about';
import Home from './components/pages/home';
import Gallery from './components/pages/gallery';
import Services from './components/pages/services';
import Book from './components/pages/book';
//design Assets


function App() {
  return (
    <main className="App">
     
      <Router>
        <ScrollToTop>
        <Switch>
          <Route path="(/|/Home|/index.html)" exact component={Home}/>
          <Route path="(/About)" exact component={About}/>
          <Route path="(/Services)" exact component={Services}/>
          <Route path="(/Gallery)" exact component={Gallery}/>
          <Route path="(/Connect)" exact component={Book}/>
        </Switch>
        </ScrollToTop>
      </Router>

    </main>
  );
}

export default App;
