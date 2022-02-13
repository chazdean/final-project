import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Portfolio from "./Portfolio/Portfolio";
import Notifications from "./notifications/Notifications";
import Watchlist from "./Watchlist/Watchlist";
import NavBar from "./Nav/NavBar";
import axios from "axios";
import { removeOneFromList } from "../helpers/removeOneFromList"
import { updateSharesForItem } from "../helpers/updateSharesForItem"
import { ThemeProvider } from "@mui/material";
import theme from "../theme"

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

export default function App() {

  const [callData, setCallData] = useState(false);
  const [appData, setAppData] = useState({
    currentUserId: 1,
    portfolioItems: [],
    watchlistItems: []
  });

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3000/api/portfolio_items/${appData.currentUserId}`),
      axios.get(`http://localhost:3000/api/watchlist_items/${appData.currentUserId}`)
    ]).then((all) => {
      setAppData((prev) => ({
        ...prev,
        portfolioItems: all[0].data,
        watchlistItems: all[1].data
      }))
    })
  }, [callData]);

  console.log(appData.watchlistItems); // DELETE LINE LATER

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
      // const watchlistItems = [...appData.watchlistItems]  //delete this line or map out every obj in the array ... ??
      const newPortfolioItems = removeOneFromList(listName, appData.portfolioItems, id)

      return axios.delete(`http://localhost:3000/api/portfolio_items/${id}`)
        .then(() => {
          setAppData((prev) => ({
            ...prev,
            portfolioItems: newPortfolioItems
          }))
        })
    }

    if (listName === "watchlist") {
      const newWatchlistItems = removeOneFromList(listName, appData.watchlistItems, id)

      return axios.delete(`http://localhost:3000/api/watchlist_items/${id}`)
        .then(() => {
          setAppData((prev) => ({
            ...prev,
            watchlistItems: newWatchlistItems
          }))
        })
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

  const addWatchlistItem = (asset_id) => {
    const watchlist_item = {
      user_id: appData.currentUserId,
      asset_id,
    }
    return axios.post(`http://localhost:3000/api/watchlist_items`, { watchlist_item })
      .then(() => {
        setCallData(!callData);
      })
  };

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme} >
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Dashboard portfolioItems={appData.portfolioItems} />} />
        <Route path="/portfolio" element={<Portfolio
          portfolioItems={appData.portfolioItems}
          addPortfolioItem={addPortfolioItem}
          updatePortfolioItem={updatePortfolioItem}
          deleteItem={deleteItem}
        />} />
        <Route path="/watchlist" element={<Watchlist
          watchlistItems={appData.watchlistItems}
          addWatchlistItem={addWatchlistItem}
          deleteItem={deleteItem}
        />} />
         <Route path="/notifications" element={<Notifications />}/>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
