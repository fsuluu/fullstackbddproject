class Api::PostsController < ApplicationController
    def index
      posts = Post.includes(:user, :category).all
      render json: posts.as_json(include: [:user, :category])
    end
  
    def show
      post = Post.find(params[:id])
      render json: post.as_json(include: [:user, :category, :comments, :likes])
    end
  
    def create
      post = Post.new(post_params)
      if post.save
        render json: post, status: :created
      else
        render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def post_params
      params.require(:post).permit(:title, :content, :user_id, :category_id)
    end
  end
  