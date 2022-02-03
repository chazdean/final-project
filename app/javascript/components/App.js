import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Portfolio from "./Portfolio";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    ); 
}