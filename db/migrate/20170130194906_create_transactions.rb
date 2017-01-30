class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :company_id, null: false
      t.float :price, null: false
      t.float :stock_count, null: false
      t.timestamps
    end

    add_index :transactions, :user_id
    add_index :transactions, :company_id
  end
end
