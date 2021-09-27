import React from 'react';
import ReactDOM from 'react-dom'; 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './screens/Home'
import Form from './screens/Form'

function App() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/form' exact component={Form} />
          </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
