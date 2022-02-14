Rails.application.routes.draw do
   #root route for react app
  root 'homepage#index'

  namespace :api do
    resources :dashboard, only: [:index]
    resources :portfolio_items, except: [:edit, :index] 
    resources :watchlist_items, only: [:show, :create, :destroy] 
    resources :assets, only: [:index]
    resources :notifications, only: [:index, :show, :update]
  end

   #catch all routes
   get '/*path' => 'homepage#index'
end
