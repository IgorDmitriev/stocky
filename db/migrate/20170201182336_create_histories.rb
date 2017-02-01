class CreateHistories < ActiveRecord::Migration[5.0]
  def change
    create_table :histories do |t|
      t.integer :user_id, null: false
      t.float   :money, null: false
      t.timestamps
    end

    add_index :histories, :user_id
  end
end
