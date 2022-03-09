# To The Moon

TotheMoon is a portfolio tracker for both stock and crypto investments. Whether you’re a day trader or long term investor, keeping an eye on your earnings is always top of mind in this volatile world. ToTheMoon bridges the gap between your traditional stock portfolio and crypto wallet.  Get a clear picture of your entire portfolio with our futuristic investment dashboard, and stay up to date on movements in the market!


This app was built by [Chaz Dean](https://github.com/chazdean), [Justin Wheeler](https://github.com/wheeljust) and [Kelsey Erickson](https://github.com/KelseyErickson). 

## Features

- Up to date prices and information using the twelvedata API
- A dashboard with clear data visualization for an easy look at the current state of the portfolio. 
- Autofilled searchbar. 
- Portfolio page to view, add, edit, and delete stocks and cryptos.
- Watchlist page to view, add, and delete stocks and cryptos.
- Email summary when notifications are turned on.


## Built With 

- Rails v5.2.6
- Node v16.13.2
- React v17.0.2
- Material UI

## Final Product 

### Login Page
!["Login"](https://github.com/chazdean/final-project/blob/readme/docs/TTMLogin.png?raw=true)

### Dashboard
!["Dashboard"](https://github.com/chazdean/final-project/blob/readme/docs/TTMDashboard.png?raw=true)

### Portfolio
!["Portfolio"](https://github.com/chazdean/final-project/blob/readme/docs/TTMPortfolio.png?raw=true)

### Edit Porfolio Item
!["PortfolioEdit"](https://github.com/chazdean/final-project/blob/readme/docs/TTMPortfolio-edit.png?raw=true)

### Watchlist
!["Watchlist"](https://github.com/chazdean/final-project/blob/readme/docs/TTMWatchList.png?raw=true)

### Notifcations Page
!["NotificationsPage"](https://github.com/chazdean/final-project/blob/readme/docs/TTMNotifications.png?raw=true)

### Notifications
!["Email"](https://github.com/chazdean/final-project/blob/readme/docs/TMMEmailNotifications.png?raw=true)

## Dependencies

    "@babel/preset-react": "^7.16.7",
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@mui/icons-material": "^5.3.1",
    "@mui/material": "^5.4.0",
    "@mui/styles": "^5.4.1",
    "@rails/webpacker": "5.4.3",
    "axios": "^0.25.0",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "chart.js": "^3.7.0",
    "chartjs-plugin-datalabels": "^2.0.0",
    "prop-types": "^15.8.1",
    "react": "^17.0.2",
    "react-chartjs-2": "^4.0.1",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "webpack": "^4.46.0",
    "webpack-cli": "^3.3.12",
    "yarn": "^1.22.17"

# Getting Started

- Install all dependencies using `npm install` and `yarn install`
- Migrate the seed data using `rails db:migrate`
- Get free API key from TwelveData - https://twelvedata.com/ - and enter it into a .env file following the .env.example
- Start rails server with `bin/rails s -b 0.0.0.0`
- Navigate to the appropriate server on your browser.
- Note: Email notifications will not send without more extensive setup including a gmail app key. 

