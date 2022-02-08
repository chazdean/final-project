# Preview all emails at http://localhost:3000/rails/mailers/profile_mailer
class ProfileMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/profile_mailer/profile_summary_send
  def profile_summary_send
    ProfileMailer.profile_summary_send
  end

end
