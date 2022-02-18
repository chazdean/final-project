class Api::UsersController < ApplicationController
  
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    else
      p "Create User Failed"
    end


  def current_user
    @user = User.find_by(id: session[:user.id])
    if @user
      render json: @user, except: [:password, :created_at, :updated_at]
    end
  end

  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
