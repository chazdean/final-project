import { totalValue } from './totals'

/**
 * updatePercents
 * @param {arr of obj} currentArray is an array of portfolio items
 * @returns updated array with percents adjusted based on the new total_value of each item and the portfolio
 */
export const updatePercents = (currentArray) => {
  const total = totalValue(currentArray);

  return currentArray.map((obj) => {
    return { ...obj, percent_of_portfolio: Math.round((obj.total_value / total) * 10000) / 100 }
  })

};