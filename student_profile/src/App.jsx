import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom';
import Login from  './components/login/Login'
import Admin from './components/admin/Admin';
import MainPage from './components/home/MainPage'
import Academics  from './components/home/Academics';
import Placements from './components/home/Placements';
import HelpDesk from './components/home/HelpDesk';
import Fee from './components/home/Fee';
import Feedback from './components/home/Feedback';
import Settings from './components/home/Settings';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' Component={Login} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/admin' Component={Admin} />
        <Route exact path='/home/*' Component={MainPage} />
        <Route exact path='/academics' Component={Academics} />
        <Route path="/placements" Component={Placements} />
        <Route path="/fee" Component={Fee} />
        <Route path="/helpdesk" Component={HelpDesk} />
        <Route path="/feedback" Component={Feedback} />
        <Route path="/settings" Component={Settings} />
      </Routes>
    </Router>
  );
}

export default App;
