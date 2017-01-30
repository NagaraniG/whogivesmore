require 'test_helper'

class DonationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get donations_index_url
    assert_response :success
  end

  test "should get new" do
    get donations_new_url
    assert_response :success
  end

  test "should get show" do
    get donations_show_url
    assert_response :success
  end

  test "should get edit" do
    get donations_edit_url
    assert_response :success
  end

end
