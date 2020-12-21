import React, {Component} from 'react';

import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/Common/Services';
class App extends Component {
  render(){
    return (
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path='/'
            component={Home}
          />

          <Route
            path='/about'
            component={About}
          />

          <Route
            path='/services'
            component={Services}
          />

          <Route
            path='/a'
            render={() => {
              return(
                <h1>I am /a element</h1>
              )
            }}
          />
        </PageWrapper>
      </Router>
    );
  }
  
}

export default App;
