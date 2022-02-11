import { updatePercents } from "./updatePercents";

/**
 * removeOneFromList
 * @param {arr of obj} currentArray is the current state of portfolio items array 
 * @param {*} id is the portfolio_item_id that is being removed
 * @returns an updated state array with the item removed and updated percents for remaining items if it is the portfolio list
 */
export const removeOneFromList = (listName, currentArray, id) => {
  const index = currentArray.findIndex(item => item.id === id);

  const newArray = currentArray.filter((obj, ind) => {
    if (ind !== index) {
      return { ...obj }
    }
  })

  if (listName === "portfolio") return updatePercents(newArray);

  return newArray;
};