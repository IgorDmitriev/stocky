class CreateStocks < ActiveRecord::Migration[5.0]
  def change
    create_table :stocks do |t|
      t.integer :user_id, null: false
      t.integer :company_id, null: false
      t.float :shares, null: false
      
      t.timestamps
    end
    add_index :stocks, :user_id
    add_index :stocks, :company_id
  end
end
