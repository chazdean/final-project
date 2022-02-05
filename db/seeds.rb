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


PortfolioItem.create!({
  user_id: 1,
  symbol:"AAPL",
  long_name: "Apple Inc",
  shares: 10,
  category: "Common Stock"
})

PortfolioItem.create!({
  user_id: 1,
  symbol:"DOGE/USD",
  long_name: "Doge Coin",
  shares: 1500,
  category: "Common Stock"
})

PortfolioItem.create!({
  user_id: 1,
  symbol:"NFLX",
  long_name: "Netflix Inc",
  shares: 25,
  category: "Common Stock"
})

PortfolioItem.create!({
  user_id: 1,
  symbol:"BTC/USD",
  long_name: "Bitcoin",
  shares: 0.75,
  category: "Cryptocurrency"
})

PortfolioItem.create!({
  user_id: 1,
  symbol:"TSLA",
  long_name: "Tesla Inc",
  shares: 14,
  category: "Common Stock"
})

WatchListItem.create!({
  user_id: 1,
  symbol:"SQ",
  long_name: "Block Inc",
  category: "Common Stock"
})

WatchListItem.create!({
  user_id: 1,
  symbol:"ETH/USD",
  long_name: "Ethereum",
  category: "Cryptocurrency"
})

WatchListItem.create!({
  user_id: 1,
  symbol:"GOOGL",
  long_name: "Alphabet Inc",
  category: "Common Stock"
})

WatchListItem.create!({
  user_id: 1,
  symbol:"UBER",
  long_name: "UBER Technologies Inc",
  category: "Common Stock"
})

WatchListItem.create!({
  user_id: 1,
  symbol:"SHIB/USD",
  long_name: "Shiba Inu",
  category: "Cryptocurrency"
})


puts "Done"

