class Api::SearchController < ApplicationController

  def index
    @artists = Artist.where('lower(name) ~ ?', params[:query].downcase).limit(5)
    @concerts = Concert.where('lower(name) ~ ?', params[:query].downcase).limit(5)
    render "api/search/index"
  end
end
