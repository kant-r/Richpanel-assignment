import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup';
import Login from './Login';
import Myhome from './Myhome'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/myhome' element={<Myhome/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
