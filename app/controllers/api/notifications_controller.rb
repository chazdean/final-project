class Api::NotificationsController < ApplicationController
  def index
    @user = User.where(id: 1) #hard coded in for now
    render json: @users
  end

  def show

  end

  def update
    @user = User.where(id: 1)
    puts @user
   if User.update(params[:id], :email_notifications => user_params[:email_notifications]) && user_params[:email_notifications] == true
    ProfileMailer.profile_summary_send.deliver_later
   end
    
  end

private 

def user_params
    params.require(:params).permit(:email_notifications)
end

end

