import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Nav/NavBar";
import Dashboard from "./Dashboard/Dashboard";
import Portfolio from "./Portfolio/Portfolio";
import Watchlist from "./Watchlist/Watchlist";
import LoginForm from "./Login/LoginForm";

//Theme
import { ThemeProvider } from "@mui/material";
import theme from "../theme"

//Helpers
import { removeOneFromList } from "../helpers/removeOneFromList"
import { updateSharesForItem } from "../helpers/updateSharesForItem"

//Axios-Rails Configuration
import axios from "axios";
const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken


export default function App() {

  const [session, setSession] = useState(false);
  const [assetsList, setAssetsList] = useState([]);
  const [callData, setCallData] = useState(false);
  const [appData, setAppData] = useState({
    currentUserId: 1,
    portfolioItems: [],
    watchlistItems: []
  });

  // Assets List Data
  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3000/api/assets`),
    ]).then((all) => {
      setAssetsList(all[0].data)
    }).catch((err) => {
      console.log("Assets List Error:", err)
    })
  }, []);

  // API App Data
  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3000/api/portfolio_items/${appData.currentUserId}`),
      axios.get(`http://localhost:3000/api/watchlist_items/${appData.currentUserId}`),
      axios.get(`http://localhost:3000/api/sessions/${appData.currentUserId}`)
    ]).then((all) => {
      setAppData((prev) => ({
        ...prev,
        portfolioItems: all[0].data,
        watchlistItems: all[1].data
      }));

      if (all[2].data) {
        setSession(true);
      }

    }).catch((err) => {
      console.log(err)
    })
  }, [callData]);

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

  const handleLogin = (email, password) => {
    setSession(true);
    return axios.post(`http://localhost:3000/api/sessions`, { email, password })
      .then((res) => {
        console.log('login successful')
      })
  };

  const handleLogout = () => {
    setSession(false);
    return axios.delete(`http://localhost:3000/api/sessions/${appData.currentUserId}`)
      .then((res) => {
        console.log('logout complete')
      })
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        {session && <NavBar handleLogout={handleLogout} />}
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Dashboard
            portfolioItems={appData.portfolioItems}
            watchlistItems={appData.watchlistItems}
          />} />
          <Route path="/portfolio" element={<Portfolio
            assetsList={assetsList}
            portfolioItems={appData.portfolioItems}
            addPortfolioItem={addPortfolioItem}
            updatePortfolioItem={updatePortfolioItem}
            deleteItem={deleteItem}
          />} />
          <Route path="/watchlist" element={<Watchlist
            assetsList={assetsList}
            watchlistItems={appData.watchlistItems}
            addWatchlistItem={addWatchlistItem}
            deleteItem={deleteItem}
          />} />
          <Route path="/login" element={<LoginForm
            handleLogin={handleLogin}
          />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
