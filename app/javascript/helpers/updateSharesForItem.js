import { updatePercents } from "./updatePercents";


/**
 * updateSharesForItem
 * @param {arr of obj} currentArray is the current state of portfolio items array 
 * @param {int} newShares is the updated number of shares owned by the user
 * @param {int} id is the portfolio_item_id that is being updated
 * @returns an updated state array with adjusted total value and percents 
 */
export const updateSharesForItem = (currentArray, newShares, id) => {
  const index = currentArray.findIndex(item => item.id === id);

  const newArray = currentArray.map((obj, ind) => {
    if (ind === index) {
      return { ...obj, shares: newShares, total_value: Math.round(newShares * obj.price * 100) / 100 }
    }
    return { ...obj }
  })

  return updatePercents(newArray)
};