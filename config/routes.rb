Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :categories
    resources :posts
    resources :comments
    resources :likes
    resources :users, only: [:index, :create]
  end
end
