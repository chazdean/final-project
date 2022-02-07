class Api::PortfolioItemsController < ApplicationController
    def show
        portfolio_items = PortfolioItem.where(user_id: params[:id])
       
        #Create array of all portfolio items
        new_portfolio_items = portfolio_items.map { |item| item.attributes }

        #Create array of asset items
        asset_items = portfolio_items.map { |item| 
            asset = Asset.where(id: item.asset_id)
            asset[0].attributes
        }

        #Creates string of stock symbols needed for api call
        asset_api_params = get_asset_api_params(asset_items).join(',')

        #Returns json of all current prices of stock symbols
        @current_prices = get_current_prices(asset_api_params)

        #Updates new_portfolio array by adding info from assets array and other data
        new_portfolio_items.each_with_index { |item, index| 
            item["symbol"] = asset_items[index]["symbol"]
            item["long_name"] = asset_items[index]["long_name"]
            item["category"] = asset_items[index]["category"]
            add_attr_current_price(item)
            add_attr_total_value(item)
        }
        
        #Returns new_portfolio array with [percent_of_portfolio] for each item
        add_attr_percent_of_portfolio(new_portfolio_items)

        render json: new_portfolio_items
    end

    def create
        #number of shares, and assetID, userID
    end

    def update
        #portfolio_item_id, shares
    end

    def destroy
        #portfolio_item_id
    end

    private 

    def portfolio_item_params
        params.require(:portfolio_item).permit(:id)
    end

    def get_asset_api_params(asset_items_array)
        asset_items_array.map { |item| item["symbol"] }
    end

    def get_current_prices(symbol_params)
        response = HTTParty.get("https://api.twelvedata.com/price?symbol=#{symbol_params}&apikey=#{ENV["TWELVEDATA_API_KEY"]}")
        JSON.parse(response.body)
    end

    def add_attr_current_price(portfolio_item)
        symbol = portfolio_item["symbol"]
            if @current_prices[symbol]
                portfolio_item["price"] = @current_prices[symbol]["price"]
            else
                portfolio_item["price"] = "N/A"
            end
    end

    def get_asset_logo(symbol_param)
        response = HTTParty.get("https://api.twelvedata.com/logo?symbol=#{symbol_param}&apikey=#{ENV["TWELVEDATA_API_KEY"]}")
        JSON.parse(response.body)["url"]
    end

    def get_total_value(portfolio_item)
        portfolio_item["shares"] * portfolio_item["price"].to_i.round(2)
    end

    def add_attr_total_value(portfolio_item)
        portfolio_item["total_value"] = get_total_value(portfolio_item)
    end

    def add_attr_percent_of_portfolio(portfolio_items)
        portfolio_value = 0

        portfolio_items.each { |item| 
            portfolio_value += item["total_value"]
        }
    
        portfolio_items.each { |item| 
            percent_of_portfolio = item["total_value"].to_f / portfolio_value
            item["percent_of_portfolio"] = (percent_of_portfolio * 100).round(2)
        }
    end
end
