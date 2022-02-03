Rails.application.routes.draw do
   #root route for react app
  root 'homepage#index'

   #catch all routes
   get '/*path' => 'homepage#index'
end
