
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './Views/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Route path='/'><Landing/></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Landing/>
    </div>
  );
}

export default App;
