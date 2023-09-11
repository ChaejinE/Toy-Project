import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/signin/signin.js'
import SignUp from './pages/signup/signup.js';
import Redirect from './pages/signin/redirect.js';
import Login from './pages/signin/login.js';
import Fail from './pages/signin/fail.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/redirect" element={<Redirect />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/fail" element={<Fail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
