class User < ApplicationRecord


  def self.find_for_facebook_auth(fb_auth)
    
    user = User.where(fb_id: fb_auth['userID']).first_or_create do |u|
      u.fb_id = fb_auth['userID']
    end

    # TODO try to fetch full_name from fb

    user.fb_access_token = fb_auth['accessToken']
    user
  end
end
