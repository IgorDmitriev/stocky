class UpdateCompanies < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :symbol, :string, :null => false
    add_column :companies, :price_percent_change, :float, :null => false
  end
end
