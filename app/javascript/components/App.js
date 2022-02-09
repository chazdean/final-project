import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Portfolio from "./Portfolio/Portfolio";
import NavBar from "./Nav/NavBar";
import axios from "axios";

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

export default function App() {

  const [appData, setAppData] = useState({
    portfolioItems: [],
    watchListItems: []
  })

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3000/api/portfolio_items/1')
    ]).then((all) => {
      setAppData((prev) => ({
        ...prev,
        portfolioItems: all[0].data
      }))
    })
  }, []);

  console.log(appData.portfolioItems);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard portfolioItems={appData.portfolioItems}/>} />
        <Route path="/portfolio" element={<Portfolio portfolioItems={appData.portfolioItems} />} />
      </Routes>
    </BrowserRouter>
  );
}
