require 'test_helper'

class ProfileMailerTest < ActionMailer::TestCase
  test "profile_summary_send" do
    mail = ProfileMailer.profile_summary_send
    assert_equal "Profile summary send", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
