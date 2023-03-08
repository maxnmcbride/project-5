Rails.application.routes.draw do
  resources :user_games
  resources :games, only: [:index, :create]
  resources :users, only: [:create, :update]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/currentuser", to: "sessions#show"
end
