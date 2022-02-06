class AddUsersToWatchListItems < ActiveRecord::Migration[5.2]
  def change
    add_reference :watch_list_items, :user, index: true, foreign_key: true
    add_reference :watch_list_items, :asset, index: true, foreign_key: true
  end
end
