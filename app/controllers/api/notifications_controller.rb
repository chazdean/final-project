class Api::NotificationsController < ApplicationController
  def index
    @users = User.where(id: 1) #hard coded in for now
    render json: @users
  end

  def show
    @users = User.where(id: 1) #hard coded in for now
    render json: @users
  end

  def update
 
    @user = User.find_by_id(1) 
    @portfolio = portfolio_items_mailer(@user.id)
    @watchlist = watchlist_items_mailer(@user.id)

    if User.update(params[:id], :email_notifications => user_params[:email_notifications]) && @user.email_notifications == true
     ProfileMailer.with(user: @user, portfolio: @portfolio, watchlist: @watchlist).profile_summary_send.deliver_later
   end

  end

  def portfolio_items_mailer(user_id)
    portfolio_items = PortfolioItem.where(user_id: @user.id)
   
    #Create array of all portfolio items
    new_portfolio_items = portfolio_items.map { |item| item.attributes }

    #Create array of asset items
    asset_items = portfolio_items.map { |item| 
        asset = Asset.where(id: item.asset_id)
        asset[0].attributes
    }

    #Creates string of stock symbols needed for api call
    asset_api_params = get_asset_api_params(asset_items).join(',')

    #Returns json of all current prices of stock symbols passed via params
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

    new_portfolio_items
end

def watchlist_items_mailer(user_id)
  watchlist_items = WatchListItem.where(user_id: user_id)
  
  new_watchlist_items = watchlist_items.map { |item| item.attributes }

  asset_items = watchlist_items.map { |item| 
      asset = Asset.where(id: item.asset_id)
      asset[0].attributes
  }

  asset_api_params = get_asset_api_params(asset_items).join(',')

  @current_prices = get_current_prices(asset_api_params)
  @percent_changes = get_percent_changes(asset_api_params)
  puts "HEEEELLLLOOOOO", @percent_changes
  new_watchlist_items.each_with_index { |item, index| 
  item["symbol"] = asset_items[index]["symbol"]
  item["long_name"] = asset_items[index]["long_name"]
  item["category"] = asset_items[index]["category"]
  add_attr_current_price(item)
  add_attr_percent_changes(item)
  }

  new_watchlist_items
end


#HELPER FUNCTIONS

# move these to application as helpers


def get_total_value(portfolio_item)
  portfolio_item["shares"] * portfolio_item["price"].to_i.round(2)
end

def get_percent_changes(symbol_params)
  response = HTTParty.get("https://api.twelvedata.com/quote?symbol=#{symbol_params}&apikey=#{ENV["TWELVEDATA_API_KEY"]}")
  JSON.parse(response.body)
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

def add_attr_percent_changes(watchlist_item)
  symbol = watchlist_item["symbol"]
      if @percent_changes[symbol]
          watchlist_item["percent_change"] = @percent_changes[symbol]["percent_change"]
      else
          watchlist_item["percent_change"] = "N/A"
      end
end

private 

def user_params
    params.require(:params).permit(:email_notifications)
end

end

