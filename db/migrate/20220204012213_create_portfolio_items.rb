class CreatePortfolioItems < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_items do |t|
      t.belongs_to :user, index:true, foreign_key: true
      t.string :symbol
      t.string :long_name
      t.integer :shares
      t.string :category

      t.timestamps
    end
  end
end
