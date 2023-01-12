class GamesController < ApplicationController
    def index
        render json: Game.all
    end

    # def show
    #     discussion= Discussion.find(params[:id])
    #     render json: discussion
    # end

end
