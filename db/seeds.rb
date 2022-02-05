# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

puts "Creating Users ..."

User.create!({
  email: "rnarey0@cyberchimps.com",
  password: "Ripley",
  first_name: "Simmins",
  last_name: "Narey",
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

puts "Done"

