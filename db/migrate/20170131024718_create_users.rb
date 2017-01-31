class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.integer :fb_id, null: false
      t.string :full_name
      t.text :fb_access_token
      t.string :session_token

      t.timestamps
    end
    add_index :users, :fb_id, unique: true
    add_index :users, :session_token, unique: true
  end
end
