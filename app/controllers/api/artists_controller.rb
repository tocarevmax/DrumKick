class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render json: @artists
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

    if @artist
      render json: @artist
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
