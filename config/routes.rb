Rails.application.routes.draw do
   #root route for react app
  root 'homepage#index'

  namespace :api do
    resources :dashboard, only: [:index]
    resources :portfolio_items, except: [:edit, :show] 
    resources :watchlist_items, only: [:index, :create, :destroy] 
  end

   #catch all routes
   get '/*path' => 'homepage#index'
end
