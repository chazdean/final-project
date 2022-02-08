class ProfileMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.profile_mailer.profile_summary_send.subject
  #
  def profile_summary_send
    @greeting = "Hello! Welcome to you profile information for DATE and TIME"
    #@user = params[:user] # will have to pass in user to get the proper email
    mail(
      to: <USER EMAIL>,  ## this will be @user.email 
      subject: "Your Profile in Review"
    )
  end
end
