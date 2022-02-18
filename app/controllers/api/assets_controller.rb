class Api::AssetsController < ApplicationController

  def index
    asset_list = Asset.all
    render json: asset_list
  end
  
end
