class ProfileMailer < ApplicationMailer
  def profile_summary_send
    @user = params[:user]
    @portfolio = params[:portfolio]
    @watchlist = params[:watchlist]
    mail(
      to: ENV["USER_EMAIL"],  ## this will be @user.email 
      subject: "Daily Profile Summary - To The Moon!"
    )
  end
end
