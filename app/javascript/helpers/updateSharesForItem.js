export const updateSharesForItem = (currentArray, newShares, id) => {
  const index = currentArray.findIndex(item => item.id === id);

  const newArray = currentArray.map((obj, ind) => {
    if (ind === index) {
      return { ...obj, shares: newShares }
    }
    return { ...obj }
  })

  return newArray
};