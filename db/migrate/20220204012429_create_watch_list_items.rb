class CreateWatchListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :watch_list_items do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.string :symbol
      t.string :long_name
      t.string :category

      t.timestamps
    end
  end
end
