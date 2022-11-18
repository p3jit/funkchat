import { Routes, Route } from 'react-router-dom';
import './App.css';
import ChatPage from './pages/ChatPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './util/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path="/chat" element={<ChatPage/>}/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Login/>} exact/>
    </Routes>
  );
}

export default App;
