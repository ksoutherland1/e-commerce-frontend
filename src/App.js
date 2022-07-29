import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/Home"
import Shop from "./routes/shop/Shop";
import About from "./routes/about/About";
import Nav from "./routes/navigation/Navigation";
import "./App.scss"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
