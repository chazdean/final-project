class ProfileMailer < ApplicationMailer
  def profile_summary_send
    @user = params[:user]
    @portfolio = params[:portfolio]
    @watchlist = params[:watchlist]
    mail(
      to: ENV["USER_EMAIL"],  ## this will be @user.email 
      subject: "Your Profile in Review"
    )
  end
end
