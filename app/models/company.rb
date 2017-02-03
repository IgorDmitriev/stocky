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
                                      month_ago.strftime("%Y-%m-%d"),
                                      today.strftime("%Y-%m-%d"),
                                      ['Close'])
    array = []
    history.each_with_index do |hist, i|
      array << [(month_ago + (i * 24 * 60 * 60)).strftime("%m/%d"),
                hist.close]
    end
    array
  end
end
