import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Splash from 'containers/Splash';
import Dashboard from 'containers/Dashboard';
import Game from 'containers/Game';

function App() {
  return (
    <div>
      <header>
        <span>Market Play</span>
      </header>
      <main>
        <Router>
          <Route exact path="/" component={Splash} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/game" component={Game} />
        </Router>
      </main>
    </div>
  );
}

export default App;
