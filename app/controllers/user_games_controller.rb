class UserGamesController < ApplicationController

    def create
        params[:user_id] = session[:user_id]
        # validates :game_id, uniqueness: true
        usergame = UserGame.create!(user_games_params)
        render json: usergame, status: :created
    end

private

    def user_games_params
        params.permit(:user_id, :game_id)
    end
end
