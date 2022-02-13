class ApplicationController < ActionController::Base

    def get_asset_api_params(asset_items_array)
        asset_items_array.map { |item| item["symbol"] }
    end

    def get_current_prices(symbol_params)
        response = HTTParty.get("https://api.twelvedata.com/price?symbol=#{symbol_params}&apikey=#{ENV["TWELVEDATA_API_KEY"]}")
        JSON.parse(response.body)
    end

    def add_attr_current_price(asset_item)
        symbol = asset_item["symbol"]
            if @current_prices[symbol]
                asset_item["price"] = @current_prices[symbol]["price"]
            else
                asset_item["price"] = "N/A"
            end
    end

    def get_asset_logo(symbol_param)
        response = HTTParty.get("https://api.twelvedata.com/logo?symbol=#{symbol_param}&apikey=#{ENV["TWELVEDATA_API_KEY"]}")
        JSON.parse(response.body)["url"]
    end

end
