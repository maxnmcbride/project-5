class User < ApplicationRecord
    has_many :user_games
    has_many :games, through: :user_games
    has_secure_password
    validates :username, presence: :true
    # add uniqueness
    # figure out special validation for "real" email address
end
