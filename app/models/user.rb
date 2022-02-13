class User < ApplicationRecord

    has_many :portfolio_items
    has_many :watchlist_items
    
end
