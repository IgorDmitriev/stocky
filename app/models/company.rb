class Company < ApplicationRecord
  validates :name, :price, presence: true

  has_many :stocks
  has_many :transaction
end
