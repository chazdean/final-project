class Api::SessionsController < ApplicationController

  def create
      # If the user exists AND the password entered is correct.
    if user = User.authenticate_with_credentials(params[:email], params[:password])
      session[:user_id] = user.id
      redirect_to '/'
    else
      # If user's login doesn't work, send them back to the login form.
      p "User Login Failed"
      redirect_to '/login'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end


end
