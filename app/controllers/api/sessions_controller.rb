class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:email])  
    # If the user exists AND the password entered is correct.
    if @user
      session[:user_id] = @user.id
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
