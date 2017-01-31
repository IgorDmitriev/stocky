class Company < ApplicationRecord
  validates :name, :price, presence: true

  after_initialize :update_company

  has_many :stocks
  has_many :transaction

  def update_company
    info = StockQuote::Stock.quote(self.symbol)
    self.name = info.name
    ask = info.ask
    bid = info.bid
    self.price = (ask + bid).to_f/2
    self.price_percent_change = info.changein_percent
  end
end
