import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import Snacks from "./components/Assets/images/Snacks";
import Cakes from "./components/screens/Cakes";
import Coffee from "./components/screens/Coffee";
import Spotlight from "./components/screens/Spotlight";
import Tea from "./components/screens/Tea";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Spotlight/>}/>
        <Route path="/coffee" element={<Coffee/>}/>
        <Route path="/tea" element={<Tea/>}/>
        <Route path="/cakes" element={<Cakes/>}/>
        <Route path="/snacks" element={<Snacks/>}/>

      </Routes>
    </Router>
  );
}

export default App;
