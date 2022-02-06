require 'test_helper'

class Api::AssetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_assets_index_url
    assert_response :success
  end

end
