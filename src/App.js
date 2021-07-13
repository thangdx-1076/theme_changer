import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route render={()=><div> thang test not found</div>}></Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
