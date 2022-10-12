import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./styles/styles.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/ben-tucker"
                    element={
                        <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    }
                ></Route>
                <Route
                    path="/ben-tucker/projects"
                    element={
                        <Projects
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                        />
                    }
                ></Route>
                <Route
                    path="/ben-tucker/about"
                    element={
                        <About menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
