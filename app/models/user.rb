class User < ApplicationRecord
    has_many :user_games, dependent: :destroy
    has_many :games, through: :user_games
    has_secure_password
    validates :username, presence: :true, uniqueness: {case_sensitive: false}
end
