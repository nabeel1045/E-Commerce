import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import Coffee from "./components/screens/Coffee";
import Spotlight from "./components/screens/Spotlight";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Spotlight/>}/>
        <Route path="/coffee" element={<Coffee/>}/>
      </Routes>
    </Router>
  );
}

export default App;
