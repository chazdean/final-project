class Api::WatchlistItemsController < ApplicationController
    #Disabled CSRF Token for testing controllers REMOVE when done
    skip_before_action :verify_authenticity_token

    def show
        watchlist_items = WatchListItem.where(user_id: params[:id])
        
        new_watchlist_items = watchlist_items.map { |item| item.attributes }

        asset_items = watchlist_items.map { |item| 
            asset = Asset.where(id: item.asset_id)
            asset[0].attributes
        }

        asset_api_params = get_asset_api_params(asset_items).join(',')

        @current_prices = get_current_prices(asset_api_params)
        @percent_changes = get_percent_changes(asset_api_params)

        new_watchlist_items.each_with_index { |item, index| 
        item["symbol"] = asset_items[index]["symbol"]
        item["long_name"] = asset_items[index]["long_name"]
        item["category"] = asset_items[index]["category"]
        add_attr_current_price(item)
        add_attr_percent_changes(item)
    }

        render json: new_watchlist_items
    end

    def create
        watchlist_item = WatchListItem.new(watchlist_item_params)
        watchlist_item.save
        
        new_watchlist_item = [watchlist_item.attributes]
        asset_item = Asset.where(id: new_watchlist_item[0]["asset_id"])
        asset_api_param = get_asset_api_params(asset_item).join(',')
        
        current_price = get_current_prices(asset_api_param)
        @current_prices = { asset_api_param => current_price }

        percent_change = get_percent_changes(asset_api_param)
        @percent_changes = { asset_api_param => percent_change }

        new_watchlist_item.each_with_index { |item, index| 
            item["symbol"] = asset_item[index]["symbol"]
            item["long_name"] = asset_item[index]["long_name"]
            item["category"] = asset_item[index]["category"]
            add_attr_current_price(item)
            add_attr_percent_changes(item)
        }

        render json: new_watchlist_item
    end

    def destroy
        watchlist_item = WatchListItem.find(params[:id])
        watchlist_item.destroy
    end

    private

    def watchlist_item_params
        params.require(:watchlist_item).permit(:user_id, :asset_id)
    end

    def get_percent_changes(symbol_params)
        response = HTTParty.get("https://api.twelvedata.com/quote?symbol=#{symbol_params}&apikey=#{ENV["TWELVEDATA_API_KEY"]}")
        JSON.parse(response.body)
    end

    def add_attr_percent_changes(watchlist_item)
        symbol = watchlist_item["symbol"]
            if @percent_changes[symbol]
                watchlist_item["percent_change"] = @percent_changes[symbol]["percent_change"]
            else
                watchlist_item["percent_change"] = "N/A"
            end
    end
end
