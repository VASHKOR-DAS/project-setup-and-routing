import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route exact path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>

          <Route path='*' element={<NoMatch />}></Route>




        </Routes>
      </Router>
    </div>
  );
}

export default App;
