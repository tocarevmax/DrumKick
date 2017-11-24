class Api::SearchController < ApplicationController

  def index
    if (params[:name] && (!params[:name].empty?))
      @artists = Artist.where('lower(name) ~ ?', params[:name].downcase)
                       .limit(5)

      @concerts = Concert.where('lower(name) ~ ?', params[:name].downcase)
                         .where('"date_time" > ?', Date.today)
                         .limit(5)

      render "api/search/index"
    end
  end
end
