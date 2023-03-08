class GamesController < ApplicationController
    def index
        render json: Game.all, status: :ok
    end

    def create
        game = Game.create!(games_params)
        render json: game, status: :created 
    end

    private 

    def games_params
        params.permit(:title, :platform, :genre, :theme, :release_date, :image_url, :multiplayer, :game_description, :developer)
    end

end
