# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


benches = Bench.create([
  {
  description:"Near the 4th Ave-9th St stop",
  lat:40.670355,
  lng: -73.988935
},
  {
  description: "Cozy Prospect Park Location",
  lat: 40.661205,
  lng: -73.979700
},
  {
  description: "Hip trendy Gowanus bench, close to Whole Foods!!!!",
  lat: 40.676945,
  lng: -73.991759
},
  {
  description: "If you love superfund sites, you'll love this bench!!!!",
  lat: 40.673995,
  lng: -73.996031
},
  {
  description: "A dunkin donuts and checkers are just a few feet away",
  lat: 40.668368,
  lng: -73.993751
},
  ])
