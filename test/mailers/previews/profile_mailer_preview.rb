# Preview all emails at http://localhost:3000/rails/mailers/profile_mailer
class ProfileMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/profile_mailer/profile_summary_send
  def profile_summary_send
    @user = User.new(id: 1, first_name: "Joe", last_name: "Smith", email: "joe@gmail.com", email_notifications: true)
    ProfileMailer.with(user: @user).profile_summary_send.deliver_later
  end

end
