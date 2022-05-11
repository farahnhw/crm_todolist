import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Auth from '../src/Pages/Auth/Auth'
import Dashboard from '../src/Pages/Dashboard/Dashboard';
import Register from '../src/Pages/Register/Register';
import Chat from '../src/Pages/Dashboard/Chat';
import Project from '../src/Pages/Dashboard/Project';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="Register" element={<Register />} />
      <Route path="Chat" element={<Chat />} />
      <Route path="Project" element={<Project />} />
    </Routes>
  );
}

export default App;