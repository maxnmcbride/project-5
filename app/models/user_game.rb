class UserGame < ApplicationRecord
    belongs_to :user
    belongs_to :game
    validates :game, uniqueness: {scope: :user, message: "already in your library."}
end
