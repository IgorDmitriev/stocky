class UpdateUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :money, :float, default: 100000
  end
end
