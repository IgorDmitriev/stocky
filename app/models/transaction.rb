class Transaction < ApplicationRecord
  validates :user_id, :company_id, :price, :stock_count, presence: true
  
end
