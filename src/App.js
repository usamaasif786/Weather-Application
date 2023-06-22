// import Weather from './components/body/weather';
// import './App.css';
// import Weather from './components/body/weather';

// function App() {
//   return (
//     <div className="App">
//       <Weather/>
//     </div>
//   );
// }

// export default App;

// import { Signup } from './components/signupform/signupform';
// import { Login } from './components/loginform/loginform';
// import MainPage from './components/body/mainpage';
import "./App.css";
import { Signup } from "./components/SignUpPage/signupform";
import { Login } from "./components/LoginPage/loginform";
import MainPage from "./components/body/mainpage";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
