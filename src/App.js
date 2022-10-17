import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Snacks from "./components/screens/Snacks";
import Preloader from "../src/components/Loader/Preloader";
import Cakes from "./components/screens/Cakes";
import Coffee from "./components/screens/Coffee";
import Menu from "./components/screens/Menu";
import Spotlight from "./components/screens/Spotlight";
import Tea from "./components/screens/Tea";

function App() {
    return (
        <>
            <Preloader/>
            <Router>
                <Routes>
                    <Route path="/" element={<Spotlight />} />
                    <Route path="/coffee" element={<Coffee />} />
                    <Route path="/tea" element={<Tea />} />
                    <Route path="/cakes" element={<Cakes />} />
                    <Route path="/snacks" element={<Snacks />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
