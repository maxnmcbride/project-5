class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email
  has_many :user_games
end
