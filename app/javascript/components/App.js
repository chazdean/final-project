import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Portfolio from "./Portfolio/Portfolio";
import NavBar from "./Nav/NavBar";
import axios from "axios";
import { removeOneFromList } from "../helpers/removeOneFromList"
import { updateSharesForItem } from "../helpers/updateSharesForItem"

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

  console.log(appData.portfolioItems); // DELETE LINE LATER

  const addPortfolioItem = (asset_id, shares) => {
    const portfolio_item = {
      user_id: appData.currentUserId,
      asset_id,
      shares
    }
    return axios.post(`http://localhost:3000/api/portfolio_items`, { portfolio_item })
      .then(() => {
        setCallData(!callData);
      })
  };

  const deleteItem = (listName, id) => {
    if (listName === "portfolio") {
      const watchListItems = [...appData.watchListItems]  //delete this line or map out every obj in the array ... ??
      const newPortfolioItems = removeOneFromList(listName, appData.portfolioItems, id)

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
      // create similar logic to the above portfolio delete method
    }
  };

  const updatePortfolioItem = (newShares, id, asset_id) => {
    const newPortfolioItems = updateSharesForItem(appData.portfolioItems, newShares, id)
    const portfolio_item = {
      user_id: appData.currentUserId,
      asset_id,
      shares: newShares
    }

    return axios.patch(`http://localhost:3000/api/portfolio_items/${id}`, { portfolio_item })
      .then(() => {
        setAppData((prev) => ({
          ...prev,
          portfolioItems: newPortfolioItems
        }))
      })
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio
          portfolioItems={appData.portfolioItems}
          addPortfolioItem={addPortfolioItem}
          updatePortfolioItem={updatePortfolioItem}
          deleteItem={deleteItem}
        />} />

      </Routes>
    </BrowserRouter>
  );
}
