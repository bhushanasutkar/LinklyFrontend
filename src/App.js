import './App.css';
import Sidebar from './Components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Sidebarcomponents/Dashboard';
import Backlinkvault from './Components/Sidebarcomponents/Backlinkvault';
import Backlinkmanager from './Components/Sidebarcomponents/Backlinkmanager';
import Backlinkmonitor from './Components/Sidebarcomponents/Backlinkmonitor';
import Linkgiver from './Components/Sidebarcomponents/Linkgiver';

import Linkstate from './contextApi/Linkstate';
import Login from './Components/Login';

import Signup from './Components/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Components/Home';
import { UserAuthContextProvider } from './contextApi/useAuthContext';

function App() {


return (
  <>
  {/* <Login/> */}
  <UserAuthContextProvider>
  <Linkstate>
        <Router>
        <div className=" setup ">
          <Sidebar />
          <div style={{ width: '-webkit-fill-available' }}>
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/backlinkvault" element={<Backlinkvault />} />
              <Route exact path="/backlinkmanager" element={<Backlinkmanager />} />
              <Route exact path="/backlinkmonitor" element={<Backlinkmonitor />} />
              <Route exact path="/linkgiver" element={<Linkgiver />} />
              <Route  exact path="/" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/home"element={<ProtectedRoute><Home /></ProtectedRoute>}/>
            </Routes>
          </div>
          </div>
        </Router>
    </Linkstate>
    </UserAuthContextProvider>
  </>

);
}

export default App;
