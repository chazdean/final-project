import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Portfolio from "./Portfolio/Portfolio";
import NavBar from "./Nav/NavBar";
import axios from "axios";
import { removeOneFromList } from "../helpers/removeOneFromList"

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

export default function App() {

  const [callData, setCallData] = useState(false);
  const [appData, setAppData] = useState({
    currentUserId: 1,
    portfolioItems: [],
    watchListItems: []
  });

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3000/api/portfolio_items/${appData.currentUserId}`)
    ]).then((all) => {
      setAppData((prev) => ({
        ...prev,
        portfolioItems: all[0].data
      }))
    })
  }, [callData]);

  console.log(appData.portfolioItems);

  const addPortfolioItem = (asset_id, shares) => {
    const portfolio_item = {
      user_id: appData.currentUserId,
      asset_id,
      shares
    }
    // console.log(`axios.put with params, assetID: ${params.asset_id} and shares: ${params.shares}`);
    return axios.post(`http://localhost:3000/api/portfolio_items`, { portfolio_item })
      .then(() => {
        setCallData(!callData);
      })
  };

  const deleteItem = (listName, id) => {
    if (listName === "portfolio") {
      const watchListItems = [...appData.watchListItems]
      const newPortfolioItems = removeOneFromList(appData.portfolioItems, id)

      return axios.delete(`http://localhost:3000/api/portfolio_items/${id}`)
        .then(() => {
          setAppData((prev) => ({
            ...prev,
            watchListItems,
            portfolioItems: newPortfolioItems
          }))
        })
    }
    if (listName === "watchlist") {

    }
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio
          portfolioItems={appData.portfolioItems}
          addPortfolioItem={addPortfolioItem}
          deleteItem={deleteItem}
        />} />

      </Routes>
    </BrowserRouter>
  );
}
