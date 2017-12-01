class Api::ConcertsController < ApplicationController

  def index

    # origin = logged_in? ? current_user.zip : [37.792,-122.393]


    query = Concert.within(100, :origin => [37.792,-122.393])
                   .where('"date_time" > ?', Date.today)
                   .order('date_time ASC')
                   .limit(40)

    @concerts = []
    names_pushed = []

    query.each do |concert|
      unless names_pushed.include?(concert.name[0..6])
        @concerts.push(concert)
        names_pushed.push(concert.name[0..6])
      end
    end

    @concerts = @concerts.first(10)

    render 'api/concerts/index'
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
    @concert = Concert.includes(:artist).find_by(id: params[:id])
    if @concert
      render :show
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
