class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.string :symbol
      t.string :long_name
      t.string :category

      t.timestamps
    end
  end
end
