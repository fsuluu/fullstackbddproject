class Api::LikesController < ApplicationController
    def create
      like = Like.new(like_params)
      if like.save
        render json: like, status: :created
      else
        render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def like_params
      params.require(:like).permit(:user_id, :post_id)
    end
  end
  