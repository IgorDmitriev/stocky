class History < ApplicationRecord
  validates :user_id, :money, presence: true

  belongs_to :user
end
