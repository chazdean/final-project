export const removeOneFromList = (currentArray, id) => {
  const index = currentArray.findIndex(item => item.id === id);

  const newArray = currentArray.filter((obj, ind) => {
    if (ind !== index) {
      return { ...obj }
    }
  })

  return newArray
};