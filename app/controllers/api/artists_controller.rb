class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
                     .order('upcoming_events DESC')
                     .limit(10)

    @artists = @artists.shuffle

    render :index
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render json: @artist
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def show
    @artist = Artist.find_by(id: params[:id])

    @local_concerts = @artist.concerts
                          .within(100, :origin => [37.792,-122.393])
                          .where('"date_time" > ?', Date.today)
                          .order('date_time ASC')

    @artist_concerts = @artist.concerts
                          .where('"date_time" > ?', Date.today)
                          .order('date_time ASC')

    if @artist
      render :show
    else
      render json: ["Cannot find artist with id: #{params[:id]}"], status: 422
    end
  end

  private
  def artist_params
    params.require(:artist).permit(
      :tm_id, :name, :image_url, :tm_url, :upcoming_events)
  end
end
