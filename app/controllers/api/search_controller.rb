class Api::SearchController < ApplicationController

  def index
    if (params[:name] && (params[:name] != ""))
      @artists = Artist.where('lower(name) ~ ?', params[:name].downcase)
                       .order('upcoming_events DESC')
                       .limit(5)

      # @artists = @artists.shuffle

      @concerts = Concert.where('lower(name) ~ ?', params[:name].downcase)
                         .where('"date_time" > ?', Date.today)
                         .order('date_time ASC')
                         .limit(5)

      render "api/search/index"
    end
  end
end
