require 'test_helper'

class Api::CardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cards_index_url
    assert_response :success
  end

  test "should get show" do
    get api_cards_show_url
    assert_response :success
  end

  test "should get new" do
    get api_cards_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_cards_edit_url
    assert_response :success
  end

end
