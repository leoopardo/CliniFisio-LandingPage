import {BrowserRouter, Routes, Route} from "react-router-dom"
import {NavBar} from "./components/navBar/navBar"
import { Home } from "./pages/Home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
