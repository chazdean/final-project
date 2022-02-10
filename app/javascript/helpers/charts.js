export const assetChartData = (assetList, totalAssetPercent) => {
  let labels = [];

  assetList.map((asset) => {
    labels.push(asset.symbol);
  });

  let chartData = {
    labels: labels,
    datasets: [
      {
        data: totalAssetPercent,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return chartData;
};

export const totalPercentChartData = (stockPercent, cryptoPercent) => {
  let chartData = {
    labels: ["Stocks", "Crypto"],
    datasets: [
      {
        data: [stockPercent, cryptoPercent],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return chartData;
};


export const chartOptions = (chartData) => {
  const percentChartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem, data) {
            return (
              chartData["datasets"][0]["data"][tooltipItem.dataIndex] + "%"
            );
          },
        },
      },
    },
  };
  return percentChartOptions
};