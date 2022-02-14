export const stockChartData = (assetList, totalAssetPercent) => {
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
          "#6E3CBC",
          "#dacdef",
          "#573095",
          "#8a5fcc",
          "#542e8f",
          "#9872d2",
          "#baa0e1",
          "#f0ebf9",
          "#8356c9",
          "#4c2982",
        ],
        borderColor: [
          "#6E3CBC",
          "#dacdef",
          "#573095",
          "#8a5fcc",
          "#542e8f",
          "#9872d2",
          "#baa0e1",
          "#f0ebf9",
          "#8356c9",
          "#4c2982",
        ],
        borderWidth: 1,
      },
    ],
  };

  return chartData;
};

export const cryptoChartData = (assetList, totalAssetPercent) => {
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
          "#289ebf",
          "#9ad8ea",
          "#21839f",
          "#cbebf4",
          "#58bfdc",
          "#1e768e",
          "#49b9d9",
          "#dbf1f7",
          "#1a687e",
        ],
        borderColor: [
          "#289ebf",
          "#9ad8ea",
          "#21839f",
          "#cbebf4",
          "#58bfdc",
          "#1e768e",
          "#49b9d9",
          "#dbf1f7",
          "#1a687e",
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
          "#6E3CBC",
          "#289ebf"

        ],
        borderColor: [
          "#4D2A83",
          "#1C6E85",
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
              chartData["labels"][tooltipItem.dataIndex] + " - " + chartData["datasets"][0]["data"][tooltipItem.dataIndex] + "%"
            );
          },
        },
      },
    },
  };
  return percentChartOptions
};