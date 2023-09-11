import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/signin/signin.js'
import SignUp from './pages/signup/signup.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/sign-up" element={< SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
