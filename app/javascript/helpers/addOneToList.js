import { updatePercents } from "./updatePercents";

/**
 * addOneToList
 * @param {arr of obj} currentArray is the current state of portfolio items array 
 * @param {obj}  newObj is the new portfolio_item that is being added to the state
 * @returns an updated state array with the item removed and updated percents for remaining items if it is the portfolio list
 */
export const addOneToList = (listName, currentArray, newObj) => {

  const newArray = currentArray.map((obj) => {
    return { ...obj }
  })

  newArray.push({ ...newObj })

  if (listName === "portfolio") return updatePercents(newArray);

  return newArray;
};