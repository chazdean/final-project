class RemoveUserFromPortfolioItems < ActiveRecord::Migration[5.2]
  def change
    remove_reference :portfolio_items, :user, foreign_key: true
  end
end
