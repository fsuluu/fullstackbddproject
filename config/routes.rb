Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :categories
    resources :posts
    resources :comments
    resources :likes
  end
end
