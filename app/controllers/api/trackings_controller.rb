class Api::TrackingsController < ApplicationController

  def create
    @tracking = Tracking.new(tracking_params)
    @tracking.user_id = current_user.id

    if @tracking.save
      render json: @tracking
    else
      render json: @tracking.errors.full_messages, status: 422
    end
  end

  def destroy
    @tracking = current_user.trackings
                .find_by(id: params[:id])
    if @tracking
      @tracking.destroy
      render json: @tracking
    else
      render json: ["Tracking with id #{params[:id]} either doesn't exist or doesn't belong to current user."]
    end
  end

  private
  def tracking_params
    params.require(:tracking).permit(:artist_id)
  end
end
