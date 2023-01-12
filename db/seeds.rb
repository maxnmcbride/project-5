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
g1 = Game.create(title: "Oblivion", platform:"PC, Xbox, PlayStation 3", genre: "Action Role-Playing", theme:"Fantasy", release_date:"March 20, 2006", image_url:"https://static.wikia.nocookie.net/elderscrolls/images/e/e1/Oblivion_Cover.png/revision/latest?cb=20160815160654", multiplayer: false, game_description: "Taking place within the fictional province of Cyrodiil, the game's main story focuses on the player character's efforts to thwart a fanatical cult known as the Mythic Dawn that plans to open portal gates to a demonic realm known as Oblivion", developer:"Bethesda Game Studios")
g2 = Game.create(title: "Crash Bash", platform:"PlayStation", genre: "Party", theme:"Fantasy, Sci-Fi, Alternate Historical, Comedy, Medieval", release_date:"November 6, 2000", image_url:"https://i.scdn.co/image/ab67616d0000b2739e6b691e0ebbe3b5bb711281", multiplayer: true, game_description: "The game includes a collection of 28 mini-games playable within three modes of gameplay, as well as eight playable characters from the Crash Bandicoot series.", developer:"Eurocom Entertainment Software")
g3 = Game.create(title: "Jak and Daxter", platform:"PlayStation 2, PlayStation Portable, PlayStation 3, PlayStation Vita, PlayStation 4", genre: "Action-adventure", theme:"Fantasy, Sci-Fi", release_date:"December 3, 2001", image_url:"https://image.api.playstation.com/cdn/UP9000/CUSA02522_00/o9zJoXqpd4lzarjIbvvZLFjYGLsLvqCp.png", multiplayer: false, game_description: "Test your wits and your skills as you embark on a journey to reverse your best friend's transformation into a furry Ottsel, even as he entangles you in his amusing antics. Discover twisted corruption and battle the sinister minds behind this chilling plot. Light Eco. Precursor Technology. Power Cells. Dark Eco. What does it all mean? Only one person holds the secret behind the power of the mysterious Eco. Together you must now take on these endeavors.", developer:"Naughty Dog")
puts"finished game seeds"

puts "seeding join"
UserGame.create(user_id: u1.id, game_id: g1.id)
UserGame.create(user_id: u1.id, game_id: g2.id)
UserGame.create(user_id: u1.id, game_id: g3.id)
UserGame.create(user_id: u2.id, game_id: g1.id)
UserGame.create(user_id: u2.id, game_id: g2.id)
UserGame.create(user_id: u2.id, game_id: g3.id)
UserGame.create(user_id: u3.id, game_id: g1.id)
UserGame.create(user_id: u3.id, game_id: g2.id)
UserGame.create(user_id: u3.id, game_id: g3.id)
puts"finished user_game seeds"

puts"Done seeding!"