import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route exact path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='*' element={<NoMatch />}></Route>
          
          <Route path='/friend/:friendId' element={<FriendDetail />}></Route>






        </Routes>
      </Router>
    </div>
  );
}

export default App;
