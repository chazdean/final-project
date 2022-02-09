/**
 * sortStocks
 * @param {array} dataArray - is an array of all the portfolio or watch list items from the state
 * @returns only an array of the state items that are STOCKS
 */
export const sortStocks = (dataArray) => {
  return dataArray.filter((item) => item.category === "Common Stock")
}

/**
 * sortCryptos
 * @param {array} dataArray - is an array of all the portfolio or watch list items from the state
 * @returns an array of the state items that are CRYPTOS
 */
export const sortCryptos = (dataArray) => {
  return dataArray.filter((item) => item.category === "Cryptocurrency")
}