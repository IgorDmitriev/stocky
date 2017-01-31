class User < ApplicationRecord
  validates :full_name, presence: true

  # before_save :fetch_full_name

  def self.find_for_facebook_auth(fb_auth)

    user = User.where(fb_id: fb_auth['userID']).first_or_initialize do |u|
      u.fb_id = fb_auth['userID']
    end
    user.fb_access_token = fb_auth['accessToken']

    # test for wrong accesstoken
    # user.fb_access_token = '123123'

    begin
      graph = Koala::Facebook::API.new(user.fb_access_token)
      profile = graph.get_object("me")
      user.full_name = profile['name']
    rescue
      user.full_name = nil
    end
    debugger
    user
  end
end
