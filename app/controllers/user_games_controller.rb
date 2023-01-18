class UserGamesController < ApplicationController

    def create
        # this is handling the user_id params from the back end
        # instead of from the front end -- this is preferred way to handle
        debugger
        params[:user_id] = session[:user_id]
        usergame = UserGame.create!(comments_params)
        render json: usergame, status: :created
    end

private

    def user_games_params
        params.permit(:user_id, :game_id)
    end
end
