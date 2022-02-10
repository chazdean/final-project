
/**
 * totalValue
 * @param {array of objects} dataArray - any array of assets that you need the total value of
 * @returns sum of the total values of each asset
 */
export const totalValue = (dataArray) => {
  return dataArray.reduce((sum, current) => sum + current.total_value, 0);
}

/**
 * totalPercent
 * @param {array of objects} dataArray - any array of assets that you need the total percent of
 * @returns sum of the portfolio percentages of each asset
 */
export const totalPercent = (dataArray) => {
  return dataArray.reduce((sum, current) => sum + current.percent_of_portfolio, 0);
};

export const percentOfAsset = (dataArray, totalValue) => {
  const percentOfAssetArray = [];
  dataArray.map((asset) => {
    percentOfAssetArray.push(asset.total_value/totalValue * 100);

  })

  return percentOfAssetArray;
}