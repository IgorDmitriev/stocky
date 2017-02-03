class Company < ApplicationRecord
  validates :name, :price, presence: true

  before_create :update_company

  has_many :stocks
  has_many :transactions

  def update_company
    info = StockQuote::Stock.quote(self.symbol)
    self.name = info.name
    # ask = info.ask
    # bid = info.bid
    # self.price = (ask + bid).to_f/2
    self.price = info.previous_close
    if info.changein_percent
      self.price_percent_change = info.changein_percent
    else
      self.price_percent_change = 0
    end
  end

  def get_history
    today = Time.now
    month_ago = Time.now - (30 * 24 * 60 * 60)
    history = StockQuote::Stock.quote(self.symbol,
                                      today.strftime("%Y-%m-%d"),
                                      month_ago.strftime("%Y-%m-%d"),
                                      ['Close'])
    history.map(&:close)
  end
end
