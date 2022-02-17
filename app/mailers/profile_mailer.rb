class ProfileMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.profile_mailer.profile_summary_send.subject
  #

  # portfolio_items = PortfolioItem.where(user_id: params[:id])
       
  # #Create array of all portfolio items
  # new_portfolio_items = portfolio_items.map { |item| item.attributes }

  # #Create array of asset items
  # asset_items = portfolio_items.map { |item| 
  #     asset = Asset.where(id: item.asset_id)
  #     asset[0].attributes
  # }

  # #Creates string of stock symbols needed for api call
  # asset_api_params = get_asset_api_params(asset_items).join(',')

  # #Returns json of all current prices of stock symbols passed via params
  # @current_prices = get_current_prices(asset_api_params)

  # #Updates new_portfolio array by adding info from assets array and other data
  # new_portfolio_items.each_with_index { |item, index| 
  #     item["symbol"] = asset_items[index]["symbol"]
  #     item["long_name"] = asset_items[index]["long_name"]
  #     item["category"] = asset_items[index]["category"]
  #     add_attr_current_price(item)
  #     add_attr_total_value(item)
  # }
  
  # #Returns new_portfolio array with [percent_of_portfolio] for each item
  # add_attr_percent_of_portfolio(new_portfolio_items)

  # new_portfolio_items



  def profile_summary_send
    @user = params[:user]
    @portfolio = params[:portfolio]
    @watchlist = params[:watchlist]
    mail(
      to: ENV["USER_EMAIL"],  ## this will be @user.email 
      subject: "Your Profile in Review"
    )
  end
end
