class Api::PortfolioItemsController < ApplicationController
    def show
        @portfolio_items = PortfolioItem.where(user_id: params[:id])
        #get asset data for each item
        @portfolio_params = get_porfolio_params(@portfolio_items).join(',')
        new_portfolio_items = @portfolio_items.map { |item| item.attributes }
        @current_prices = get_current_prices(@portfolio_params)

        new_portfolio_items.each { |item| 
            add_attr_current_price(item)
            add_attr_total_value(item)
            item.delete("created_at")
            item.delete("updated_at")
        }

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

    def get_porfolio_params(portfolio_items_array)
        portfolio_items_array.map { |item| item.symbol }
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
        portfolio_item["total-value"] = get_total_value(portfolio_item)
    end

    def add_attr_percent_of_portfolio(portfolio_items)
        portfolio_value = 0

        portfolio_items.each { |item| 
            portfolio_value += item["total-value"]
        }
    
        portfolio_items.each { |item| 
            percent_of_portfolio = item["total-value"].to_f / portfolio_value
            item["percent_of_portfolio"] = (percent_of_portfolio * 100).round(2)
        }
    end
end
