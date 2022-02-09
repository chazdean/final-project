# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

puts "Creating Database ..."

User.create!({
  email: "bob@gmail.com",
  password: "123",
  first_name: "Bob",
  last_name: "Bobberton",
  email_notifications: false
})

User.create!({
  email: "bbeeken1@hibu.com",
  password: "Brigit",
  first_name: "Elsop",
  last_name: "Beeken",
  email_notifications: false
})

User.create!({
  email: "varmour2@usda.gov",
  password: "Vladimir",
  first_name: "Byfford",
  last_name: "Armour",
  email_notifications: true
})

User.create!({
  email: "asmallwood3@stumbleupon.com",
  password: "Alard",
  first_name: "Juckes",
  last_name: "Smallwood",
  email_notifications: false
})

User.create!({
  email: "oeffemy4@ezinearticles.com",
  password: "Opalina",
  first_name: "Gladtbach",
  last_name: "Effemy",
  email_notifications: false
})

Asset.create!({
  symbol: "AAPL",
  long_name: "Apple Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "DOCU",
  long_name: "Docusign",
  category: "Common Stock",
})

Asset.create!({
  symbol: "AMZN",
  long_name: "Amazon.com Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "FB",
  long_name: "Meta Platforms Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "GOOGL",
  long_name: "Alphabet Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "MSFT",
  long_name: "Microsoft Corporation",
  category: "Common Stock",
})

Asset.create!({
  symbol: "NFLX",
  long_name: "Netflix Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "TSLA",
  long_name: "Tesla Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "V",
  long_name: "Visa Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "ZM",
  long_name: "Zoom Video Communications",
  category: "Common Stock",
})

Asset.create!({
  symbol: "MCD",
  long_name: "McDonald's Corporation",
  category: "Common Stock",
})

Asset.create!({
  symbol: "DIS",
  long_name: "The Walt Disney Company",
  category: "Common Stock",
})

Asset.create!({
  symbol: "WMT",
  long_name: "Walmart Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "PG",
  long_name: "The Proctor & Gamble Company",
  category: "Common Stock",
})

Asset.create!({
  symbol: "SNAP",
  long_name: "Snap Inc.",
  category: "Common Stock",
})

Asset.create!({
  symbol: "GME",
  long_name: "GameStop Corp",
  category: "Common Stock",
})

Asset.create!({
  symbol: "AMC",
  long_name: "AMC Entertainment Holdings",
  category: "Common Stock",
})

Asset.create!({
  symbol: "UBER",
  long_name: "UBER Technologies Inc",
  category: "Common Stock",
})

Asset.create!({
  symbol: "XOM",
  long_name: "Exxon Mobil Corporation",
  category: "Common Stock",
})

Asset.create!({
  symbol: "PYPL",
  long_name: "PayPal Holdings",
  category: "Common Stock",
})

Asset.create!({
  symbol: "SQ",
  long_name: "Block Inc.",
  category: "Common Stock",
})

Asset.create!({
  symbol: "BTC/USD",
  long_name: "Bitcoin",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "ETH/USD",
  long_name: "Ethereum",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "DOGE/USD",
  long_name: "Doge Coin",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "XRP/USD",
  long_name: "Ripple",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "ADA/USD",
  long_name: "Cardano",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "DOT/USD",
  long_name: "Polkadot",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "SOL/USD",
  long_name: "Solana",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "SHIB/USD",
  long_name: "Shiba Inu",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "AVAX/USD",
  long_name: "Avalanche",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "MATIC/USD",
  long_name: "Polygon",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "DAI/USD",
  long_name: "Dai",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "ATOM/USD",
  long_name: "Cosmos",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "LTC/USD",
  long_name: "Litecoin",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "XLM/USD",
  long_name: "Stellar Lumens",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "TWLO",
  long_name: "Twillio Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "PINS",
  long_name: "Pinterest Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "COIN",
  long_name: "Coinbase Global Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "MA",
  long_name: "Mastercard Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "DDOG",
  long_name: "Datadog Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "ADBE",
  long_name: "Adobe Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "COST",
  long_name: "Costco Wholesale Corp",
  category: "Common Stock"
})

Asset.create!({
  symbol: "INTC",
  long_name: "Intel Corporation",
  category: "Common Stock"
})

Asset.create!({
  symbol: "SBUX",
  long_name: "Starbucks Corporation",
  category: "Common Stock"
})

Asset.create!({
  symbol: "ABNB",
  long_name: "Airbnb Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "EBAY",
  long_name: "eBay Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "CRWD",
  long_name: "CrowdStrike Holdings Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "DPZ",
  long_name: "Dominos Pizza Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "ATVI",
  long_name: "Activision Blizzard Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "BCH/USD",
  long_name: "Bitcoin Cash",
  category: "Cryptocurrency"
})

Asset.create!({
  symbol: "BAC",
  long_name: "Bank of America Corp",
  category: "Common Stock"
})

Asset.create!({
  symbol: "PEP",
  long_name: "PepsiCo Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "NKE",
  long_name: "Nike Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "UPS",
  long_name: "United Parcel Service Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "BA",
  long_name: "Boeing Company",
  category: "Common Stock"
})

Asset.create!({
  symbol: "GE",
  long_name: "General Electric Company",
  category: "Common Stock"
})

Asset.create!({
  symbol: "TGT",
  long_name: "Target Corporation",
  category: "Common Stock"
})

Asset.create!({
  symbol: "MMM",
  long_name: "3M Company",
  category: "Common Stock"
})

Asset.create!({
  symbol: "PNC",
  long_name: "PNC Financial Services",
  category: "Common Stock"
})

Asset.create!({
  symbol: "F",
  long_name: "Ford Motor Company",
  category: "Common Stock"
})

Asset.create!({
  symbol: "JNJ",
  long_name: "Johnson & Johnson",
  category: "Common Stock"
})

Asset.create!({
  symbol: "HD",
  long_name: "Home Depot Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "PFE",
  long_name: "Pfizer Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "CVX",
  long_name: "Chevron Corporation",
  category: "Common Stock"
})

Asset.create!({
  symbol: "VZ",
  long_name: "Verizon Communications",
  category: "Common Stock"
})

Asset.create!({
  symbol: "ROKU",
  long_name: "Roku Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "SPOT",
  long_name: "Spotify Technology",
  category: "Common Stock"
})

Asset.create!({
  symbol: "HOOD",
  long_name: "Robinhood Markets",
  category: "Common Stock"
})

Asset.create!({
  symbol: "TWTR",
  long_name: "Twitter Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "SHOP",
  long_name: "Shopify Inc",
  category: "Common Stock"
})

Asset.create!({
  symbol: "GBTC",
  long_name: "Grayscale Bitcoin Trust",
  category: "Common Stock"
})


PortfolioItem.create!({
  user_id: 1,
  asset_id: 1,
  shares: 10,
})

PortfolioItem.create!({
  user_id: 1,
  asset_id: 24,
  shares: 1500,
})

PortfolioItem.create!({
  user_id: 1,
  asset_id: 7,
  shares: 14,
})

PortfolioItem.create!({
  user_id: 1,
  asset_id: 22,
  shares: 2,
})

PortfolioItem.create!({
  user_id: 1,
  asset_id: 10,
  shares: 21,
})

WatchListItem.create!({
  user_id: 1,
  asset_id: 1
})

WatchListItem.create!({
  user_id: 1,
  asset_id: 8
})

WatchListItem.create!({
  user_id: 1,
  asset_id: 5
})

WatchListItem.create!({
  user_id: 1,
  asset_id: 23
})

WatchListItem.create!({
  user_id: 1,
  asset_id: 29
})

puts "Done"

