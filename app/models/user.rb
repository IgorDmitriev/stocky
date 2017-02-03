class User < ApplicationRecord
  validates :full_name, presence: true
  validates :session_token, presence: true, uniqueness: true

  has_many :stocks
  has_many :histories

  # before_save :fetch_full_name
  after_initialize :ensure_session_token


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
      # TODO check unique ID
    rescue
      user.full_name = nil
    end

    user
  end

  def total_worth
    stocks = self.stocks.includes(:company)
    stock_sum = 0
    stocks.each do |stock|
      stock_sum += stock.shares * stock.company.price
    end
    self.money + stock_sum
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(128)
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(128)
  end
end
