class Api::PortfolioItemsController < ApplicationController
    def show
        # Query database to get all porfolio items for current user using :param (user_id)
        # Map over the portfolio items to create an array of only symbols
        # Call the API using the symbols list - Returns an array of objects, each object has the current
        # Create a new array of objects with updated portfolio items
            # Symbol, name, shares, category, current_price, total_value, percent of portfolio? 

        #json file with all user portfolio item with inserted info from api(current price)
    end

    def create
    end

    def update
    end

    def destroy
    end
end
