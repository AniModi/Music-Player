import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home></Home>}/>
        <Route exact path={"/login"} element={<Login></Login>}/>
        <Route exact path={"/register"} element={<Register></Register>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
