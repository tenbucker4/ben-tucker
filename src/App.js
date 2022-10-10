import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import "./styles/styles.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    }
                ></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
