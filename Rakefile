# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

desc "Send email to users"
task :email_sender => [:environment] do 
  User.find_each do |user|
    ProfileMailer.profile_summary_send.deliver if user.email_notifications == true
  end
end

