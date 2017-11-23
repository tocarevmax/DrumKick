class Api::ConcertsController < ApplicationController

  def index
    @concerts = Concert.all
    render json: @concerts
  end

  def create
    @concert = Concert.new(concert_params)
    if @concert.save
      render json: @concert
    else
      render json: @concert.errors.full_messages, status: 422
    end
  end

  def show
    @concert = Concert.find_by(id: params[:id])
    if @concert
      render json: @concert
    else
      render json: ["Cannot find concert with id: #{params[:id]}"], status: 422
    end
  end

  private
  def concert_params
    params.require(:concert).permit(
      :artist_id, :tm_id, :tm_attraction_id, :name, :tm_url,
      :date_time, :local_date, :local_time, :timezone, :image_url,
      :locale, :venue_name, :venue_lat, :venue_long, :venue_address,
      :price_range)
  end
end
