
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Planets} from "./Pages/planets.tsx";
import {Earth} from "./Pages/earth.tsx";
import {Mars} from "./Pages/mars.tsx";
import {Moon} from "./Pages/moon.tsx";
import {Sun} from "./Pages/sun.tsx";
import {Venus} from "./Pages/venus.tsx";
import Mercury from "./Pages/mercury.tsx";
import Jupiter from "./Pages/jupiter.tsx";
import Saturn from "./Pages/saturn.tsx";
import Uranus from "./Pages/uranus.tsx";
import Neptune from "./Pages/neptune.tsx";
import Layout from "./components/Layout.tsx";

function App() {

  return (
      <Router>
          <Layout>
              <Routes>
                  <Route path="/" element={<Planets />} />
                  <Route path="/earth" element={<Earth />} />
                  <Route path="/jupiter" element={<Jupiter />} />
                  <Route path="/mars" element={<Mars />} />
                  <Route path="/mercury" element={<Mercury />} />
                  <Route path="/moon" element={<Moon />} />
                  <Route path="/neptune" element={<Neptune />} />
                  <Route path="/saturn" element={<Saturn />} />
                  <Route path="/sun" element={<Sun />} />
                  <Route path="/uranus" element={<Uranus />} />
                  <Route path="/venus" element={<Venus />} />
              </Routes>
          </Layout>
      </Router>
  )
}

export default App
