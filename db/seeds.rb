puts"destroying all previous seeds"
User.destroy_all
Game.destroy_all
puts"seeds destroyed"

puts"seeding users"
u1 = User.create(username: "brenda123", email: "brenda@gmail.com", password: "brenda")
u2 = User.create(username: "lucifermorningstar", email: "fallenangel@gmail.com", password: "satan123")
u3 = User.create(username: "max", email: "max@gmail.com", password: "max")
puts"finished user seeds"

puts"seeding games"
g1 = Game.create(title: "Oblivion", platform:, :genre, :theme, :release_date, :image, :multiplayer, :game_description, :developer)