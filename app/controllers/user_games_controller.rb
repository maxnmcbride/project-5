class UserGamesController < ApplicationController
    wrap_parameters format: []

    def create
        params[:user_id] = session[:user_id]
        usergame = UserGame.create!(user_games_params)
        render json: usergame, status: :created
    end

    def destroy
        usergame = @current_user.user_games.find_by(game_id: params[:id])
        if usergame
            usergame.destroy
            head :no_content
        else
            render json: {error: "Comment not found"}, status: :not_found
        end  
     end

private

    def user_games_params
        params.permit(:user_id, :game_id, :user_game)
    end
end
