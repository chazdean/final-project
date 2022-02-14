class Api::NotificationsController < ApplicationController
  def index
    @users = User.where(id: 1) #hard coded in for now
    render json: @users
  end

  def show

  end

  def update
    User.update(params[:id], :email_notifications => user_params[:email_notifications])
  end

private 

def user_params
    params.require(:params).permit(:email_notifications)
end

end

